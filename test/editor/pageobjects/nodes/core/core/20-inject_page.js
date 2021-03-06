/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var util = require("util");

var nodePage = require("../../node_page");

function injectNode(id) {
    nodePage.call(this, id);
}

util.inherits(injectNode, nodePage);

var payloadType = {
    "flow": 1,
    "global": 2,
    "str": 3,
    "num": 4,
    "bool": 5,
    "json": 6,
    "bin": 7,
    "date": 8,
    "env": 9,
};

var timeType = {
    "none": 1,
    "interval": 2,
    "intervalBetweenTimes": 3,
    "atASpecificTime": 4,
};

var timeType = {
    "none": 1,
    "interval": 2,
    "intervalBetweenTimes": 3,
    "atASpecificTime": 4,
};

var timeType = {
    "none": 1,
    "interval": 2,
    "intervalBetweenTimes": 3,
    "atASpecificTime": 4,
};

injectNode.prototype.setPayload = function(type, value) {
    // Open a payload type list.
    browser.clickWithWait('//*[contains(@class, "red-ui-typedInput-container")]');
    // Select a payload type.
    var payloadTypeXPath = '//*[@class="red-ui-typedInput-options"]/a[' + payloadType[type] + ']';
    browser.clickWithWait(payloadTypeXPath);
    if (value) {
        // Input a value.
        browser.setValue('//*[@class="red-ui-typedInput-input"]/input', value);
    }
}

injectNode.prototype.setTopic = function(value) {
    browser.setValue('#node-input-topic', value);
}

injectNode.prototype.setOnce = function(value) {
    browser.clickWithWait('#node-input-once');
}

injectNode.prototype.setTimeType = function(type) {
    var timeTypeXPath = '//*[@id="inject-time-type-select"]/option[' + timeType[type] + ']';
    browser.clickWithWait(timeTypeXPath);
}

injectNode.prototype.setRepeat = function(sec) {
    browser.setValue('#inject-time-interval-count', sec);
}

module.exports = injectNode;
