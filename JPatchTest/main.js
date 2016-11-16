defineClass("ViewController", {
            addData: function() {
                var dataArray = self.dataArray();
                dataArray.addObject("点我吧！");
                self.tableView().reloadData();
                console.log(">>>>>>>>>>>>>>"+dataArray);
            },
            })


