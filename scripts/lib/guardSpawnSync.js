function guardSpawnSync(spawn) {
	if (spawn.error) throw spawn.error
	if (spawn.status !== 0) process.exit(spawn.status)
}

export default guardSpawnSync
