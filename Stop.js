CSpawnSection.prototype.Update = function( enemyManager )
{
	var rtNow = Date.now();
	if ( rtNow > this.m_rtSpawnStart && this.m_mapEnemySpawns.size > 0 )
	{
			this.m_rtNextSpawn = rtNow + ( this.m_spawnRate * 1000 );
			this.m_curInterval++;
  }
};
