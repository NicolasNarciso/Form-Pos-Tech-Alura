function submit(){
        var inputs = document.getElementsByTagName("input");
        var selects = document.getElementsByTagName("select");
        var json = "{"
        for(var i = 0;i < inputs.length || i < selects.length ;i++){
           if(i < inputs.length){json += """+inputs[i].id+"":""+inputs[i].value+""";json += ",";}
           if(i < selects.length){json += """+selects[i].id+"":""+selects[i].value+""";json += ",";}
        }
        json = json.substr(0,json.length - 1);
        json += "}";
        json = JSON.parse(json);
        console.log(json);
    }
