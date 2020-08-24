 		/**********
		 * 변수 선언
		 */
		
		//달력
		var sDate = $('#startDate').datepicker({ dateFormat: 'yy-mm-dd'});
		var eDate = $( '#endDate' ).datepicker({ dateFormat: 'yy-mm-dd'});
		
		
		/***********
		 * 초기화 처리
		 */

		function init() { 
			$("#srchMyStce").empty();	//my문구 검색창 초기화
			//$("#useYN").empty();		//사용여부 초기화인데 option이 통째로 날라감
			
			
			//조회 기간 1달로 설정
			$("#usePeriod").val("mth");
			$("#startDate").datepicker("setDate" , "-30");
			$("#endDate").datepicker("setDate" , "0");
			
			//콤보박스 세팅
			//데이터 가져왔다고 가정, ALL은 따로 선언을 또 해줘야 하나?
			var retData = new Array("SENTENCE", "REQUEST", "COMMENT");
			

			//콤보 세팅
				//콤보객체(select)의 하위 객채(option) 제거
//				$('#divSelect').empty();

				//콤보객채(select)의 하위 객채(option)를 갯수대로 생성			
				for(var i = 0; i < retData.length; i++) {                
		            var option = $("<option>" + retData[i] + "</option>");
		            $('#divSelect').append(option);
		        }
				

			}
		
			init();


		/*************
		 * 프로세스 처리
		 */
		
		//셀렉트 박스로 조회기간 선택
		$("#usePeriod").change(function(){
			$("#usePeriod option:selected").each(function(){
				if($(this).val() == "year") {
					$("#startDate").datepicker("setDate", "-365");
					$("#endDate").datepicker("setDate", "0");
						
				} else if($(this).val() == "mth") {
					$("#startDate").datepicker("setDate", "-30");
					$("#endDate").datepicker("setDate", "0");
					
				} else if($(this).val() == "week") {
					$("#startDate").datepicker("setDate", "-7");
					$("#endDate").datepicker("setDate", "0");
					
				} else if($(this).val() == "tday") {
					$("#startDate").datepicker("setDate", "0");
					$("#endDate").datepicker("setDate", "0");
							
				} else if($(this).val() == "yday") {
					$("#startDate").datepicker("setDate", "-1");
					$("#endDate").datepicker("setDate", "0");
				}
				
			});
					
		});

		//조회 처리
		$("#search").click(function() {
			
			var source = {};
			source.SRCH_STR_DT = $("#startDate").val().replace(/-/gi, "");
			source.SRCH_END_DT = $("#endDate").val().replace(/-/gi, "");
			source.USE_YN = "Y"; 
			source.PSNZ_QA_STCE_DVCD = $('#divSelect').val();
			
			
//			var input1 = $('#srchMyStce').val();
//			alert(input1); 
//			source.STCE_CTT = $("td:contains('고객')");
//			alert(source.STCE_CTT); //[object Object]
			
//			var value = $(this).val().toLowerCase();
//			$(".checkClass").filter(function() {
//				 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//		    	});			
			
			
			corebase.selectList(source, "WAQA1420.SELECT_MYSTCE_LIST", function (result, metadata) {
				
				$("#srchGrid").empty();
				
	        	if(metadata.resultCount > 0) {
		        	var getData = JSON.stringify(result);
		        	//alert(getData);		//{...}, {...}, {...}

		        	jQuery(result).each(function(i, e) {
		    			var dataStr = "";
		    			dataStr += "<tr>";
		    			dataStr += "<td style='text-align:center;'>";
		    			dataStr += '<input type="checkbox" class="checkClass" name="checkOne"></td>';
		    			dataStr += "</td>";
		    			dataStr += "<td id='stceOut'>" + e.STCE_CTT + "</td>";
		    			dataStr += "<td style='text-align:center;'>" + e.SRT_SEQ + "</td>";
		    			dataStr += "<td style='text-align:center;'>" + e.PSNZ_QA_STCE_DVCD + "</td>";
		    			dataStr += "<td style='text-align:center;'>" + e.USE_YN + "</td>";
		    			dataStr += "<td style='text-align:center;'>" + e.USE_CNT + "</td>";
		    			dataStr += "</tr>";
		    			$("#srchGrid").append(dataStr);	  
		        	});	   
		        	       	      		
	        	}else{
	        		alert("조회 결과가 없습니다");
	        	}
	        	        	

//	        	alert(result); //[object Object], [object Object], [object Object]   	
	        	
//	        	var jsonData = jQuery.parseJSON(getData); 
//	        	alert(jsonData);	//[object Object], [object Object], [object Object]
        	
       		        	
			});
			
		});
		
		
		//삭제 처리
		$("#delete").click(function() {
					
			var chkList = $("input:checkbox[name=checkOne]:checked");			
//			alert(chkList);
			
			var delResult = confirm('선택한 항목을 삭제하시겠습니까?');
			
			if(delResult) {
				if($('#checkId').is(":checked") == true) {
	
					/** 원본 **/
		            $cbwrap.each( chkList, function(idx, data){ //idx...?
		               if( data.chkList == "1" ) {
		                  arrData.push(data);
		               }   
		            });
		            
		              var data = {};
		              data.DELETE_QAA = corebase.Input("delete", "WAQA1420.DELETE_MYSTCE", arrData);
		   
		              var option = {};
		              option.data = data;
		              corebase.ajax(option, function(output, metadata) {	            	  
		            	  alert("삭제가 완료되었습니다"); 		            	  
		              });
		              
		              
				} else {
					alert("삭제할 항목을 선택해 주세요!");
				}		
				
			} else {
				alert("삭제가 취소되었습니다");
			}	
		});
	
		
		//체크박스 전체 선택
		function allCheckFunc( obj ) {
			$("[name=checkOne]").prop("checked", $(obj).prop("checked") );
		}
	
		/* 체크박스 체크시 전체선택 체크 여부 */
		function oneCheckFunc( obj ) {
			var allObj = $("[name=checkAll]");
			var objName = $(obj).attr("name");
	
			if( $(obj).prop("checked") ) {
				checkBoxLength = $("[name="+ objName +"]").length;
				checkedLength = $("[name="+ objName +"]:checked").length;
				if( checkBoxLength == checkedLength ) {
					allObj.prop("checked", true);
				} else {
					allObj.prop("checked", false);
				}
			} else {
				allObj.prop("checked", false);
			}
		}
		
		$(function() {
			$("[name=checkAll]").click(function() {
				allCheckFunc( this );
			});
			$("[name=checkOne]").each(function() {
				$(this).click(function() {
					oneCheckFunc( $(this) );
				});
			});
		});	
