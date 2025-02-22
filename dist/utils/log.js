'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/*
Chochae Community Edition - Thai Chatbot Building Platform
Copyright (C) 2020  iApp Technology Co., Ltd.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
/**
 * Console Log
 */
// tslint:disable:no-console
class Log {
    constructor(name, enable = true) {
        this.name = name;
        this.enable = enable;
    }
    debug(...k) {
        [].unshift.call(arguments, '[DEBUG]');
        this.print.apply(this, arguments);
    }
    d(...k) {
        [].unshift.call(arguments, '[DEBUG]');
        this.print.apply(this, arguments);
    }
    p(...k) {
        this.print.apply(this, arguments);
    }
    f(...k) {
        this.force.apply(this, arguments);
    }
    force(...k) {
        if (this.name) {
            [].unshift.call(arguments, '[' + this.name + ']');
        }
        console.log.apply(this, arguments);
    }
    print(...k) {
        if (this.name) {
            [].unshift.call(arguments, '[' + this.name + ']');
        }
        if (this.enable) {
            console.log.apply(this, arguments);
        }
    }
}
exports.default = Log;
//# sourceMappingURL=log.js.map