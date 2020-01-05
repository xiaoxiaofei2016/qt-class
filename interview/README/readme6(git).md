## git常用操作
 git stash :把当前工作现场储存起来，等恢复现场后继续工作

 新建一个文件夹，git init 初始化仓库 -> 生成.git文件 -> 新建一个readme.md文件
 1. git add .
 2. git commit -m 'readme.md'
 3. git checkout -b 'Dufajun' 创建并切换分支
 4. git checkout master // 每次切换分支必须保证该分支是干净的 可以git add . git     commit -m ''或 git stash
 5. git stash pop // 恢复的同时把stash内容也删了

 git full = git fetch + git merge 合并
 git branch 分支