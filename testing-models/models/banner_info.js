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
      comment: "banner id",
      field: "id"
    },
    img: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "图片",
      field: "img"
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "banner 类型(0展示图，1网页跳转，2内部跳转)",
      field: "type"
    },
    data: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "配置数据(和type对应，0不填)",
      field: "data"
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "排序",
      field: "sort"
    },
    cereateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "创建时间",
      field: "cereate_time"
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
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "是否删除(1是0否)",
      field: "is_delete"
    }
  };
  const options = {
    tableName: "banner_info",
    comment: "",
    indexes: []
  };
  const BannerInfoModel = sequelize.define("bannerInfoModel", attributes, options);
  return BannerInfoModel;
};