/**
 * @author ycx
 * @description 权限管理
 */
class PermissionController {

    /**
     * @author ycx
     * 创建权限
     * @param permissionVo {Object} 入参对象
     *  {
     *  pid:number,//父级权限id
     *  name:string,权限名称
     *  icon:string,权限图标
     *  type:number，权限类型 1,菜单，2，按钮 暂未做更多操作
     *  status:number,状态 0，禁用 1，启用
     *  uri:string, 前端资源uri
     *  sort:number,排序
     *  }
     */
    static async createPermission(permissionVo){

    }

    /**
     * 修改权限
     * @param id 权限id
     * @param permissionVo {Object} 入参对象
     *  {
     *  pid:number,//父级权限id
     *  name:string,权限名称
     *  icon:string,权限图标
     *  type:number，权限类型 1,菜单，2，按钮 暂未做更多操作
     *  status:number,状态 0，禁用 1，启用
     *  uri:string, 前端资源uri
     *  sort:number,排序
     *  }
     */
    static async updatePermission(id,permissionVo){

    }

    /**
     * 删除权限
     * @param id
     */
    static async deletePermission(id){

    }

    //static async
}
