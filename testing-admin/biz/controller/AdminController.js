/**
 * @author ycx
 * @description 用户管理
 */
class AdminController{

    /**
     * 注册管理员用户
     * @param username {string} 用户名
     * @param password {string} 密码
     * @param avatar {string} 头像
     * @param nickName {string} 昵称
     * @param note {string} 备注
     */
    static async register(username,password,avatar,nickName,note){

    }

    /**
     * @author ycx
     * @param username {string} 用户名
     * @param password {string} 密码
     * @return{BizResult} 返回登录密钥以及用户信息
     */
    static async login(username,password){

    }

    /**
     *  登出
     * @param username 用户名
     */
    static logout(username){

    }

    /**
     * 查询所有用户
     * @param pageNo 页码
     */
    static getUsers(pageNo){

    }

    /**
     * 修改密码
     * @param username {string} 用户名
     * @param oldPassword {string} 老密码
     * @param newPassword {string} 新密码
     */
    static updatePassword(username,oldPassword,newPassword){

    }

    /**
     * 删除用户
     * @param adminId {number} 记录id
     */
    static deleteUser(adminId){

    }

    /**
     * 修改用户角色
     * @param adminId {number} 管理员id
     * @param roleIds {Array<number>} 角色列表
     */
    static updateRole(adminId,roleIds){

    }

    /*/!**
     * 修改用户权限
     * @param adminId {number} 管理员id
     * @param permissions {Array<number>} 权限列表
     *!/
    static updatePermission(adminId,permissions){

    }*/

    /**
     *  获取用户所有权限列表
     * @param adminId
     */
    static getPermissionList(adminId){

    }
}
