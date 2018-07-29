(function (global) {
    var chart = function(){
        this.type = 'red';
    }
    /**
     * 
     * @param {dom} 初始化数据 
     */
    chart.prototype.init = function({}){
        this.canvas = dom 
        console.log(this.type,"lll")
    }
    chart.prototype.draw = function(){

    }
   
    console.log(global,"kkkk")
    global.ganttChart = new chart();
})(window)