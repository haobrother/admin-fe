# 与haomall-fe电商前端项目配套的后台项目admin-fe

## 依赖
需要先在服务器安装：
* node v6.17.1
* webpack v2.6.1
* git v1.8.3.1
# yarn v1.19.1

## 安装及部署过程
根据目录结构修改fe-deploy.sh中的GIT_HOME路径以及DEST_PATH路径，其中GTI_HOME为存放项目代码路径，而DEST_PATH则为打包发布路径，完成配置后保存。

接下来可以执行自动化的安装部署过程：
./fe-deploy.sh admin-fe
