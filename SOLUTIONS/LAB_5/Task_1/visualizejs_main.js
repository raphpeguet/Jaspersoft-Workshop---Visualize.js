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
						 /*-- LAB_2_4 --*/
						 //alert('You clicked on State: '+ link.parameters.store_state);						 
						 v("#div_chart_3").report({
							resource: "/public/Samples/Reports/Cities",
							scrollToTop:false,
							scale: "height",
							params: {
								state: [link.parameters.store_state]
							},
						});
						//console.log(link.parameters.store_state);
	 
					}
				}
			}
		},
		error: function (err) {
			alert(err.message);
		}
	});
	
	/*-- LAB_3_1 --*/
	var drinkFoodReport = v.report({
		resource: "/public/Samples/Reports/06g.ProfitDetailReport",
		scrollToTop:false,
		scale: "height",
		container:"#div_report_1",
		error: function (err) {
			alert(err.message);
		}
	});
	
	/*-- LAB_3_2 --*/
	$("#foodImage").on("click", function() {
		var params = {
			ProductFamily: ["Food"]
		};
		 
		drinkFoodReport.params(params).run()
			.fail(function(err) {
				alert(err.message);
			});
		 
	});
	
	/*-- LAB_3_3 --*/
	$("#drinkImage").on("click", function() {
		var params = {
			ProductFamily: ["Drink"]
		};
		 
		drinkFoodReport.params(params).run()
			.fail(function(err) {
				alert(err.message);
			});
		 
	});
	
	/*-- LAB_3_4 --*/
	var inputControls = v.inputControls({
		resource: "/public/Samples/Reports/06g.ProfitDetailReport",
		success: function(data){
			var productFamilyInputControl = _.findWhere(data, {
				id: "ProductFamily"});
				 
			_.each(productFamilyInputControl.state.options, function (option) {
				$("#productFamilySelector").append("<option " + 
					(option.selected ? "selected" : "") +
					" value='" + option.value + "'>" +
					option.label +
					"</option>");
			});
		}
	});
	 
	$("#productFamilySelector").on("change", function () {
		drinkFoodReport.params({
			"ProductFamily": [$(this).val()]
		}).run();
	});
	
	/*-- LAB_4_1 --*/
    v("#div_view_1").adhocView({
	    resource: "/public/Samples/Ad_Hoc_Views/04__Product_Results_by_Store_Type",
	    error: function (err) {
	        alert(err.message);
    	}
	});

	/*-- LAB_5_1 --*/
	v("#div_dashboard_1").dashboard({
		resource: "/public/Samples/Dashboards/4._New_Dashboard",
		error: function (err) {
			alert(err.message);
		}
	});
 
});