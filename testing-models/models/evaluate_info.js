const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: true,
            comment: "主键",
            field: "id"
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "标题",
            field: "title"
        },
        description: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "描述",
            field: "description"
        },
        icon: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "图标",
            field: "icon"
        },
        img: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "展示图",
            field: "img"
        },
        descImg: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "描述图",
            field: "desc_img"
        },
        num: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: "0",
            primaryKey: false,
            autoIncrement: false,
            comment: "评测次数",
            field: "num"
        },
        shareIcon: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "分享图(500*400px)",
            field: "share_icon"
        },
        lastIcon: {
            type: DataTypes.STRING(512),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "结束展示图",
            field: "last_icon"
        },
        favorableRate: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "好评率(100% = 10000)",
            field: "favorable_rate"
        },
        status: {
            type: DataTypes.INTEGER(2),
            allowNull: true,
            defaultValue: "0",
            primaryKey: false,
            autoIncrement: false,
            comment: "状态(0,未上架，1上架)",
            field: "status"
        },
        type: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue: "1",
            primaryKey: false,
            autoIncrement: false,
            comment: "拼测类型(1站内评测，2网页评测)",
            field: "type"
        },
        data: {
            type: DataTypes.STRING(512),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "附加字段(比如是url或者其他)",
            field: "data"
        },
        color: {
            type :DataTypes.STRING(32),
            allowNull:false,
            defaultValue: '#000',
            primaryKey: false,
            autoIncrement: false,
            comment: "颜色字段",
            field: "color"
        },
        sort: {
            type: DataTypes.BIGINT,
            allowNull: true,
            defaultValue: "0",
            primaryKey: false,
            autoIncrement: false,
            comment: "排序号",
            field: "sort"
        },
        createTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "创建时间",
            field: "create_time"
        },
        updateTime: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: "修改时间",
            field: "update_time"
        },
        isDelete: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue: "0",
            primaryKey: false,
            autoIncrement: false,
            comment: "是否删除",
            field: "is_delete"
        }
    };
    const options = {
        tableName: "evaluate_info",
        comment: "",
        indexes: []
    };
    const EvaluateInfoModel = sequelize.define("evaluateInfoModel", attributes, options);
    return EvaluateInfoModel;
};
