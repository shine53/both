$('#news_datalist').bootstrapTable({
	url: '/findNews',
	method: 'GET',
	toolbar: '#toolbar',
	pageSize: 2,
	pageNumber: 1,
	striped: true, //是否显示行间隔色
	cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
	showToggle: true,
	showColumns: true, //是否显示所有的列（选择显示的列）
	showRefresh: true, //是否显示刷新按钮
	search: true, //是否显示表格搜索
	strictSearch: true,
	clickToSelect: true, //是否启用点击选中行
	pagination: true,
	columns: [{
		field: 'id',
		title: '主键',
		visible:false
	},{
		field: 'title',
		title: '标题'
	}, {
		field: 'writer',
		title: '发布人'
	}, {
		field: 'createTime',
		title: '发布时间'
	}, {
		field: 'opt',
		title: '操作',
		formatter:optMenu
	}]
});

function optMenu(value,row,index){
	return '<a  class="btn btn-info btn-xs" onclick = showInfo('+row.id+')>查看</a> <a  class="btn btn-danger btn-xs"onclick = delId('+row.id+')>删除</a>'
}

function delId(id){
	$.ajax({
		type: "POST",
		url: "/deleteNews",
		data: "id="+id,
		success: function (data) {
			$("#news_datalist").bootstrapTable('refresh');
		}
	})
}

function showInfo(id){
	$.ajax({
		type: "get",
		url: "/findOneNew",
		data: "id="+id,
		success: function (data) {
			window.location.href = data;
		}
	})

}