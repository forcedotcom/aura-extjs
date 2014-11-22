({
    loadExtJS: function() {
        if (!this.loading) {
            this.loading = true;
            
            var head = document.getElementsByTagName('head')[0];
			var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = "/resource/extjs/build/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css";
            head.appendChild(link);
            
            var script = document.createElement("script");
            script.src = "/resource/requirejs";
            var self = this;
            script.onload= function() {
                requirejs.config({
                    baseUrl: "/resource/auraextjs__extjs/build",
                });

                requirejs(["ext-all"], function() {
                    requirejs(["packages/ext-theme-neptune/build/ext-theme-neptune"], function() {
                        self.extLoaded = true;
                        for (var n = 0; n < self.toRunWhenLoaded.length; n++) {
                            Ext.onReady(self.toRunWhenLoaded[n]);
                        }
                    });
                });
            };
            
        	head.appendChild(script);
        }
    },
    
	runWhenExtLoaded : function(f) {
        if (this.extLoaded) {
			Ext.onReady(f);
        } else {
            if (!this.toRunWhenLoaded) {
                this.toRunWhenLoaded = [];
            }

            this.toRunWhenLoaded.push(f);
        }
	}
})