const Snowflake = require('../../testing-common/util/Snowflake');

/**
 * @author ycx
 * @description
 */
class SnowflakeFactory {

    /**
     * @type {Snowflake}
     */
    static #snowflakeObj;

    /**
     *
     * @return {Snowflake}
     */
    static getSnowflake() {
        if (undefined === this.#snowflakeObj){
            this.#snowflakeObj = new Snowflake(1n,1n,1n);
        }
        //
        return this.#snowflakeObj;
    }
}

module.exports = SnowflakeFactory
