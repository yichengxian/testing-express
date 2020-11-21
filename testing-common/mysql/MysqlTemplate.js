const { Sequelize,Model } = require('sequelize');
const loggerFactory = require('../logger/LoggerFactory');

/**
 * @author ycx
 * mysql
 * how to use:<br/>
 * 首先model构造符合(最新的sequelize-automate 生成的js model) <br/>
 * model e.g. :
 * const { DataTypes} = require('sequelize');
 *  module.exports = sequelize => {
 *  const attributes = {
 *   id: {
 *      type: DataTypes.BIGINT,
 *      allowNull: false,
 *      defaultValue: null,
 *      primaryKey: true,
 *      autoIncrement: true,
 *      comment: "user's id",
 *      field: "id"
 *     },
 *   isDelete:{
 *      type: DataTypes.TINYINT(2),
 *      allowNull: false,
 *      defaultValue: 0,
 *      comment: "is delete (1 yes ,0 no)",
 *      field: "is_delete"
 *     }
 *    };
 *  const options = {
 *    tableName: "user_info",
 *    comment: "",
 *    indexes: []
 *    };
 *    const UserModel = sequelize.define("bannerInfoModel", attributes, options);
 *    return UserModel;
 *};
 *
 * 那么
 * const UserModel = require('../model/UserModel')
 * //e.g.  options
 * const opt = {
 *     where:{
 *         isDelete:1
 *     }
 * }
 *  const userDoList =await mySqlTemplate.findAll(UserModel,opt);
 *  //xxx to do some thing
 */

class MysqlTemplate {
    /**
     * 链接对象
     */
    static #SequelizeObj;

    /**
     * todo 需要提取对象处理
     *
     * @param host 端口
     * @param username 用户名
     * @param port 端口
     * @param database
     * @param password
     * @param pool {}
     * @param logEnable {boolean}
     *
     *  可配置项目具体请看源码: 暂未做更多处理
     */
    static conn(host, username, port, database, password, pool, logEnable) {

        this.#SequelizeObj = new Sequelize(database, username, password, {
            host: host,
            port: port,
            //链接池配置 具体请看源码
            pool: pool,
            //default 'mysql'
            dialect: "mysql",
            //日志
            logging: (sql,timing)=>{
                loggerFactory.getLogger('debug').debug('sql: %s ',sql);
            },
            //
            define: {
                //关闭自动更新时间
                timestamps: false,
                //createdAt:
                // updatedAt:
            }
        });
    }

    /**
     * 关闭链接
     * @param sequelize {Sequelize}
     */
    static close(sequelize) {
        return this.#getSequelizeObj().close();
    }

    /**
     * 验证链接
     */
    static authenticate() {
        try {
            this.#getSequelizeObj().authenticate();
            loggerFactory.getLogger().info('Connection has been established successfully.');
        } catch (e) {
            loggerFactory.getLogger().info('Unable to connect to the database:', e);
        }
    }

    /**
     * 获取对象
     */
    static #getSequelizeObj() {
        if (undefined === this.#SequelizeObj) {
            throw new Error('mysql is not conn,so you must be check you code!')
        }
        return this.#SequelizeObj;
    }

    /**
     * findAll
     * @param model {Model}  未被初始化的model
     * @param options
     * @return {Promise<Model> | Promise<Model | null>}
     */
    static findAll(model, options) {
        return model(this.#getSequelizeObj()).findAll(options)
    }

    /**
     * inc
     * @param model
     * @param fields
     * @param options
     * @return {Promise<Object> | Promise<Model> | Promise<this>}
     */
    static increment(model,fields,options){
        return model(this.#getSequelizeObj()).increment(fields,options);
    }

    /**
     * find by pk
     * @param model {Model}
     * @param id
     * @param options this attributes
     * @return {Promise<Model> | Promise<Model | null>}
     */
    static findById(model,id,options){
        return model(this.#getSequelizeObj()).findByPk(id,options)
    }

    /**
     * find one
     * @param model {Model}
     * @param options
     */
    static findOne(model, options){
        return model(this.#getSequelizeObj()).findOne(options);
    }

    /**
     * count
     * @param model {Model}
     * @param options
     */
    static count(model,options){
        return model(this.#getSequelizeObj()).count(options);
    }


}

module.exports = MysqlTemplate
