import type ProSkill                           from './proskill';
import type ProClass                           from './proclass';
import { removeFolder, rename, updateFolders } from '../data/store';

export default class ProFolder {
	public location: 'local' | 'server'                 = 'local';
	public dataType                                     = 'folder';
	public key                                          = {};
	public open                                         = false;
	public name                                         = 'Folder';
	public data: Array<ProFolder | ProClass | ProSkill> = [];
	public parent?: ProFolder;

	constructor(data?: Array<ProFolder | ProClass | ProSkill>) {
		if (data) {
			this.data = data;
			data
				.forEach(d => {
					if (d instanceof ProFolder) d.updateParent(this);
				});
		}
	}

	public updateParent = (parentFolder?: ProFolder) => {
		this.parent = parentFolder;
	};

	public add = (data: ProClass | ProSkill | ProFolder) => {
		if (this.data.includes(data)) return;
		if (data instanceof ProFolder) {
			rename(data, this.data);
			removeFolder(data);
			data.parent = this;
		}
		this.data.push(data);
		this.sort();
	};

	public remove = (data: ProClass | ProSkill | ProFolder) => {
		this.data = this.data.filter(d => d != data);
		this.sort();
	};

	public sort = () => {
		this.data = this.data.sort((a, b) => {
			let folder = 0;
			if (a instanceof ProFolder) {
				if (!(b instanceof ProFolder))
					folder = -100;
			}
			return a.name.localeCompare(b.name) + folder;
		});
		updateFolders();
	};

	public createFolder = () => {
		const folder = new ProFolder();
		rename(folder, this.data);
		this.data.push(folder);
		this.sort();
		folder.updateParent(this);
	};

	public deleteFolder = (folder: ProFolder) => {
		this.data = this.data.filter(f => f != folder);
	};

	public contains = (data: ProFolder | ProClass | ProSkill): boolean => {
		if (this.data.includes(data)) return true;

		for (const folder of <ProFolder[]>this.data.filter(d => d instanceof ProFolder)) {
			if (folder.contains(data)) return true;
		}

		return false;
	};

	public getContainingFolder = (data: ProFolder | ProClass | ProSkill): ProFolder | undefined => {
		if (this.data.includes(data)) return this;

		for (const folder of <ProFolder[]>this.data.filter(d => d instanceof ProFolder)) {
			if (folder.data.includes(data)) return folder;
			else {
				const subFolder = folder.getContainingFolder(data);
				if (!subFolder) continue;
				return subFolder;
			}
		}

		return undefined;
	};

	public getSubfolder = (name: string, recursive = false): ProFolder | undefined => {
		for (const folder of <ProFolder[]>this.data.filter(d => d instanceof ProFolder)) {
			if (folder.name === name) return folder;
			else if (recursive) {
				const subFolder = folder.getSubfolder(name);
				if (!subFolder) continue;
				return subFolder;
			}
		}

		return undefined;
	};
}