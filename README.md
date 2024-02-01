# World of Warcraft Achievement Schedule for "A Keen Eye"

<p align="center">
  <img width="56" height="56" src="https://wow.zamimg.com/images/wow/icons/large/trade_archaeology.jpg" />
</p>

## Schedule

A <a href="https://duckies.github.io/a-keen-eye" rel="noreferrer">dynamic schedule</a> to view the rotation of the, "A Keen Eye" achievement.

## Credits

The logic was redone using inspiration from [this comment](https://www.wowhead.com/achievement=10603/a-keen-eye#comments:id=5747088). You can run the command they made in-game and it'll do the same and also tell you which parts you need.

```lua
/run t,s,d=time(),time{year=2016,month=8,day=31},1209600 n=floor((t-s)/d) o,a=n%13,s+n*d for i=0,12 do c,_,r=GetAchievementCriteriaInfo(10602,(o+i)%13+1) print("\124cff"..(r and"00FF00"or"FF0000")..date("%Y-%m-%d",a+i*d)..': '..c.."\124r") end
```
