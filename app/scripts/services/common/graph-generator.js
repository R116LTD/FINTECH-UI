'use strict';

var GraphUtils = angular.module('GraphUtils', ['googlechart']);

/** 
 * graph generator 
 */
GraphUtils.factory('Graph', function () {
    // initialize to whatever is in the cookie, if anything
    return {
        getColumnChart: function () {
             return {
		        "type": "ColumnChart",
		        "cssStyle": "height:180px; width:500px;",
		        "data": {
		          "cols": [
		            {
		              "id": "month",
		              "label": "Month",
		              "type": "string",
		              "p": {}
		            },
		            {
		              "id": "laptop-id",
		              "label": "Laptop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "desktop-id",
		              "label": "Desktop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "server-id",
		              "label": "Server",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "cost-id",
		              "label": "Shipping",
		              "type": "number"
		            }
		          ],
		          "rows": [
		            {
		              "c": [
		                {
		                  "v": "January"
		                },
		                {
		                  "v": 19,
		                  "f": "42 items"
		                },
		                {
		                  "v": 12,
		                  "f": "Ony 12 items"
		                },
		                {
		                  "v": 7,
		                  "f": "7 servers"
		                },
		                {
		                  "v": 4
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "February"
		                },
		                {
		                  "v": 13
		                },
		                {
		                  "v": 1,
		                  "f": "1 unit (Out of stock this month)"
		                },
		                {
		                  "v": 12
		                },
		                {
		                  "v": 2
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "March"
		                },
		                {
		                  "v": 24
		                },
		                {
		                  "v": 0
		                },
		                {
		                  "v": 11
		                },
		                {
		                  "v": 6
		                }
		              ]
		            }
		          ]
		        },
		        "options": {
		          "title": "Sales per month",
		          "isStacked": "true",
		          "fill": 20,
		          "displayExactValues": true,
		          "vAxis": {
		            "title": "Sales unit",
		            "gridlines": {
		              "count": 6
		            }
		          },
		          "hAxis": {
		            "title": "Date"
		          }
		        },
		        "formatters": {},
		        "displayed": true
		      }
        },
        getBarChart: function () {
             return {
		        "type": "BarChart",
		        "cssStyle": "height:180px; width:500px;",
		        "data": {
		          "cols": [
		            {
		              "id": "month",
		              "label": "Month",
		              "type": "string",
		              "p": {}
		            },
		            {
		              "id": "laptop-id",
		              "label": "Laptop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "desktop-id",
		              "label": "Desktop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "server-id",
		              "label": "Server",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "cost-id",
		              "label": "Shipping",
		              "type": "number"
		            }
		          ],
		          "rows": [
		            {
		              "c": [
		                {
		                  "v": "January"
		                },
		                {
		                  "v": 19,
		                  "f": "42 items"
		                },
		                {
		                  "v": 12,
		                  "f": "Ony 12 items"
		                },
		                {
		                  "v": 7,
		                  "f": "7 servers"
		                },
		                {
		                  "v": 4
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "February"
		                },
		                {
		                  "v": 13
		                },
		                {
		                  "v": 1,
		                  "f": "1 unit (Out of stock this month)"
		                },
		                {
		                  "v": 12
		                },
		                {
		                  "v": 2
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "March"
		                },
		                {
		                  "v": 24
		                },
		                {
		                  "v": 0
		                },
		                {
		                  "v": 11
		                },
		                {
		                  "v": 6
		                }
		              ]
		            }
		          ]
		        },
		        "options": {
		          "title": "Sales per month",
		          "isStacked": "true",
		          "fill": 20,
		          "displayExactValues": true,
		          "vAxis": {
		            "title": "Sales unit",
		            "gridlines": {
		              "count": 6
		            }
		          },
		          "hAxis": {
		            "title": "Date"
		          }
		        },
		        "formatters": {},
		        "displayed": true
		      }
        },
        getLineChart: function () {
             return {
		        "type": "LineChart",
		        "cssStyle": "height:180px; width:500px;",
		        "data": {
		          "cols": [
		            {
		              "id": "month",
		              "label": "Month",
		              "type": "string",
		              "p": {}
		            },
		            {
		              "id": "laptop-id",
		              "label": "Laptop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "desktop-id",
		              "label": "Desktop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "server-id",
		              "label": "Server",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "cost-id",
		              "label": "Shipping",
		              "type": "number"
		            }
		          ],
		          "rows": [
		            {
		              "c": [
		                {
		                  "v": "January"
		                },
		                {
		                  "v": 19,
		                  "f": "42 items"
		                },
		                {
		                  "v": 12,
		                  "f": "Ony 12 items"
		                },
		                {
		                  "v": 7,
		                  "f": "7 servers"
		                },
		                {
		                  "v": 4
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "February"
		                },
		                {
		                  "v": 13
		                },
		                {
		                  "v": 1,
		                  "f": "1 unit (Out of stock this month)"
		                },
		                {
		                  "v": 12
		                },
		                {
		                  "v": 2
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "March"
		                },
		                {
		                  "v": 24
		                },
		                {
		                  "v": 0
		                },
		                {
		                  "v": 11
		                },
		                {
		                  "v": 6
		                }
		              ]
		            }
		          ]
		        },
		        "options": {
		          "title": "Sales per month",
		          "isStacked": "true",
		          "fill": 20,
		          "displayExactValues": true,
		          "vAxis": {
		            "title": "Sales unit",
		            "gridlines": {
		              "count": 6
		            }
		          },
		          "hAxis": {
		            "title": "Date"
		          }
		        },
		        "formatters": {},
		        "displayed": true
		      }
        },
        getPieChart: function () {
             return {
		        "type": "PieChart",
		        "cssStyle": "height:180px; width:500px;",
		        "data": {
		          "cols": [
		            {
		              "id": "month",
		              "label": "Month",
		              "type": "string",
		              "p": {}
		            },
		            {
		              "id": "laptop-id",
		              "label": "Laptop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "desktop-id",
		              "label": "Desktop",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "server-id",
		              "label": "Server",
		              "type": "number",
		              "p": {}
		            },
		            {
		              "id": "cost-id",
		              "label": "Shipping",
		              "type": "number"
		            }
		          ],
		          "rows": [
		            {
		              "c": [
		                {
		                  "v": "January"
		                },
		                {
		                  "v": 19,
		                  "f": "42 items"
		                },
		                {
		                  "v": 12,
		                  "f": "Ony 12 items"
		                },
		                {
		                  "v": 7,
		                  "f": "7 servers"
		                },
		                {
		                  "v": 4
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "February"
		                },
		                {
		                  "v": 13
		                },
		                {
		                  "v": 1,
		                  "f": "1 unit (Out of stock this month)"
		                },
		                {
		                  "v": 12
		                },
		                {
		                  "v": 2
		                }
		              ]
		            },
		            {
		              "c": [
		                {
		                  "v": "March"
		                },
		                {
		                  "v": 24
		                },
		                {
		                  "v": 0
		                },
		                {
		                  "v": 11
		                },
		                {
		                  "v": 6
		                }
		              ]
		            }
		          ]
		        },
		        "options": {
		          "title": "Sales per month",
		          "isStacked": "true",
		          "fill": 20,
		          "displayExactValues": true,
		          "vAxis": {
		            "title": "Sales unit",
		            "gridlines": {
		              "count": 6
		            }
		          },
		          "hAxis": {
		            "title": "Date"
		          }
		        },
		        "formatters": {},
		        "displayed": true
		      }
        }
    };
});