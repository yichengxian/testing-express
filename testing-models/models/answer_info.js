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
    questionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "问题id",
      field: "question_id"
    },
    content: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "内容",
      field: "content"
    },
    grade: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "分数(成绩保留两位12分=1200)",
      field: "grade"
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
    tableName: "answer_info",
    comment: "",
    indexes: []
  };
  const AnswerInfoModel = sequelize.define("answerInfoModel", attributes, options);
  return AnswerInfoModel;
};