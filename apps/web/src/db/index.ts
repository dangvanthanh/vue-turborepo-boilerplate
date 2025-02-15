import { createRxDatabase } from 'rxdb'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'

export async function initDatabase() {
	const db = await createRxDatabase({
		name: 'vueturbodb',
		storage: getRxStorageDexie(),
		password: 'my-super-password',
		multiInstance: true,
		eventReduce: true,
	})

	await db.addCollections({
		hero: {
			schema: {
				title: 'hero schema',
				version: 9,
				primaryKey: 'id',
				type: 'object',
				properties: {
					id: { type: 'string' },
					name: { type: 'string' },
					healthpoints: { type: 'number' },
				},
			},
		},
	})

	return db
}
