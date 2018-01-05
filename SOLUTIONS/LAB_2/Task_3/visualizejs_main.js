visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {
	
	/*-- LAB_2_2 --*/
    v("#div_chart_1").report({
		resource: "/public/Samples/Reports/02._Sales_Mix_by_Demographic_Report",
		scrollToTop:false,
		scale: "height",
		error: function (err) {
			alert(err.message);
		}
	});
	
	/*-- LAB_2_3 --*/
	v("#div_chart_2").report({
		resource: "/public/Samples/Reports/States",
		scrollToTop:false,
		scale: "height",
		linkOptions: {
			events: {
				"mouseOut":function (ev, link) {},
				"mouseOver":function (ev, link) {},
				"select":function (ev, link) {},
				"click": function (ev, link) {             
					 if (link.type == "ReportExecution") {
						 alert('You clicked on State: '+ link.parameters.store_state);
	 
					}
				}
			}
		},
		error: function (err) {
			alert(err.message);
		}
	});
 
});