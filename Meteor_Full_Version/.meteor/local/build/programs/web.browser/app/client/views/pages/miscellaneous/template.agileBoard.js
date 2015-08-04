(function(){
Template.__checkName("agileBoard");
Template["agileBoard"] = new Template("Template.agileBoard", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Agile board"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content  animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-4">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h3>To-do</h3>\n                        <p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p>\n\n                        <div class="input-group">\n                            <input type="text" placeholder="Add new task. " class="input input-sm form-control">\n                                <span class="input-group-btn">\n                                        <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-plus"></i> Add task</button>\n                                </span>\n                        </div>\n\n                        <ul class="sortable-list connectList agile-list">\n                            <li class="warning-element">\n                                Simply dummy text of the printing and typesetting industry.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 12.10.2015\n                                </div>\n                            </li>\n                            <li class="success-element">\n                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 05.04.2015\n                                </div>\n                            </li>\n                            <li class="info-element">\n                                Sometimes by accident, sometimes on purpose (injected humour and the like).\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 16.11.2015\n                                </div>\n                            </li>\n                            <li class="danger-element">\n                                All the Lorem Ipsum generators\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-primary">Done</a>\n                                    <i class="fa fa-clock-o"></i> 06.10.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 09.12.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Packages and web page editors now use Lorem Ipsum as\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-primary">Done</a>\n                                    <i class="fa fa-clock-o"></i> 08.04.2015\n                                </div>\n                            </li>\n                            <li class="success-element">\n                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 05.04.2015\n                                </div>\n                            </li>\n                            <li class="info-element">\n                                Sometimes by accident, sometimes on purpose (injected humour and the like).\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 16.11.2015\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h3>In Progress</h3>\n                        <p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p>\n                        <ul class="sortable-list connectList agile-list">\n                            <li class="success-element">\n                                Quisque venenatis ante in porta suscipit.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 12.10.2015\n                                </div>\n                            </li>\n                            <li class="success-element">\n                                Phasellus sit amet tortor sed enim mollis accumsan in consequat orci.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 05.04.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Nunc sed arcu at ligula faucibus tempus ac id felis. Vestibulum et nulla quis turpis sagittis fringilla.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 16.11.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Ut porttitor augue non sapien mollis accumsan.\n                                Nulla non elit eget lacus elementum viverra.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 09.12.2015\n                                </div>\n                            </li>\n                            <li class="info-element">\n                                Packages and web page editors now use Lorem Ipsum as\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-primary">Done</a>\n                                    <i class="fa fa-clock-o"></i> 08.04.2015\n                                </div>\n                            </li>\n                            <li class="success-element">\n                                Quisque lacinia tellus et odio ornare maximus.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 05.04.2015\n                                </div>\n                            </li>\n                            <li class="danger-element">\n                                Enim mollis accumsan in consequat orci.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 11.04.2015\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h3>Completed</h3>\n                        <p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p>\n                        <ul class="sortable-list connectList agile-list">\n                            <li class="info-element">\n                                Sometimes by accident, sometimes on purpose (injected humour and the like).\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 16.11.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Ut porttitor augue non sapien mollis accumsan.\n                                Nulla non elit eget lacus elementum viverra.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 09.12.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 09.12.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Packages and web page editors now use Lorem Ipsum as\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-primary">Done</a>\n                                    <i class="fa fa-clock-o"></i> 08.04.2015\n                                </div>\n                            </li>\n                            <li class="success-element">\n                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 05.04.2015\n                                </div>\n                            </li>\n                            <li class="info-element">\n                                Sometimes by accident, sometimes on purpose (injected humour and the like).\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 16.11.2015\n                                </div>\n                            </li>\n                            <li class="warning-element">\n                                Simply dummy text of the printing and typesetting industry.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Tag</a>\n                                    <i class="fa fa-clock-o"></i> 12.10.2015\n                                </div>\n                            </li>\n                            <li class="success-element">\n                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.\n                                <div class="agile-detail">\n                                    <a href="#" class="pull-right btn btn-xs btn-white">Mark</a>\n                                    <i class="fa fa-clock-o"></i> 05.04.2015\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>') ];
}));

})();
