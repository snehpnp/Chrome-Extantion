var taskManagerScrapingInterval = null;

TaskManager.container.start = () => {
    $box.getLocal(local => {
        local.status = true;
        $box.setLocal(local, {
            onSet: () => {
                TaskManager.gotoTask(local, 'openMap');
            }
        });
    });
};

TaskManager.container.openMap = () => {
    $box.getLocal(local => {
    
        if(local.taskList.length !== 0){
            // console.log(local,local.taskList.length,"saasfafsafafasfafafafa")
        }


        if (local.taskList.length) {
            local.activeQuery = local.taskList[0];
            local.activeKeyword = local.activeQuery.split('~in~')[0].trim();
            local.activeLocation = local.activeQuery.split('~in~')[1].trim();
            local.activeQuery = local.activeQuery.replace('~in~', ' in ');
            // local.isStop = false;
            // local.keywordWait = true;
            $box.setLocal(local, {
                onSet: () => {
                 
                    $box.closeTabIfIncludes('ref=extension');
                    $box.closeTabIfIncludes('maps');
                    $box.closeTabIfIncludes('https://www.google.com/localservices/prolist');
                    // open google maps instead of google search
                    // $box.openPopup(`https://www.google.com/search?q=${local.activeQuery}&tbm=lcl&ref=extension&hl=en`);
                    // const uniqueURLPart = 'g2lbs=AOHF13le2aZo7Imqotb5vZGcPStxoE4IyDoYD8tLlAvYYzZmdeonsDT3GW5OYzviYkIz0prftLAoAXWhIwY1GUVK36yFVpgjLQ==';

                    $box.openPopup(`https://www.google.com/localservices/prolist?g2lbs=AOHF13le2aZo7Imqotb5vZGcPStxoE4IyDoYD8tLlAvYYzZmdeonsDT3GW5OYzviYkIz0prftLAoAXWhIwY1GUVK36yFVpgjLQ%3D%3D&hl=en-PK&gl=pk&cs=1&ssta=1&oq=${encodeURIComponent(local.activeQuery)}&src=2&sa=X&scp=CgASABoAKgA%3D&q=${encodeURIComponent(local.activeQuery)}&ved=2ahUKEwjB_4aBnr6IAxXJQx0JHWHeCpcQjdcJegQIABAF&slp=MgBAAVIECAIgAIgBAJoBBgoCFxkQAA%3D%3D`);

                }
            });
        } else {
            local.status = false;
            $box.setLocal(local);
            TaskManager.gotoTask(local, 'completed');
        }

    });
};


TaskManager.container.completed = () => {
    $box.notify("Scraping Completed");
    $box.getLocal(local => {
   

        TaskManager.gotoTask(local, 'stop');
    });
};

TaskManager.container.stop = () => {
    $box.getLocal(local => {
        if (local._taskManager) {
            local._taskManager.isWorking = false;
        }

        // Check the condition before setting status to false

        local.status = false;  // Only set status to false if the condition is met

        // local.openedWindows = [];
     
        clearInterval(taskManagerScrapingInterval);

        $box.setLocal(local, {
            onSet: () => {
                
                setTimeout(() => {
                    $box.closeTabIfIncludes('https://www.google.com/localservices/prolist');
                },2000)
                // Closing GoogleMaps tabs
            }
        });

    });
};
