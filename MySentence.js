$(document).ready(function() { // = javaScript의 onload와 같은 기능, $(function(){ 으로도 사용 가능

	/**********
	 * 변수 선언
	 */
	
	//달력
	var sDate = $('#startDate').datepicker();
	var eDate = $( '#endDate' ).datepicker();
	
	
	/***********
	 * 초기화 처리
	 */

	function init() { 
		//$("#divSelect").empty();	//구분 초기화
		$("#srchMyStce").empty();	//my문구 검색창 초기화
		//$("#useYN").empty();		//사용여부 초기화인데 option이 통째로 날라감
		
		
		//조회 기간 1달로 설정
		$("#usePeriod").val("mth");
		$("#startDate").datepicker("setDate" , "-30");
		$("#endDate").datepicker("setDate" , "0");


		//콤보 세팅
			//콤보객체(select)의 하위 객채(option) 제거
			$('#divSelect').empty();

			//콤보객채(select)의 하위 객채(option)를 갯수대로 생성			
			for(var i = 0; i < retData.length; i++) {                
	            var option = $("<option value='1'>" + retData[i] + "</option>");
				//var option = "<option>" + retData[i] + "</option>";
	            $('#divSelect').append(option);
	        }
		}
	
		init();


	/*************
	 * 프로세스 처리
	 */
	//체크박스 전체 선택
	$('#selectAll').change(function(){
	    var Allcheck = $(this).is(":checked");
	    if(Allcheck){
	        $('.all').prop('checked',true);
	    } else {
	        $('.all').prop('checked',false);
	    }
	});
	
	
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
	
	
	//my문구 검색 처리
	$("#srchMyStce").keyup(function() {
		
		
	});
	
	
	//조회 처리
	$("#search").click(function() {
		
		
	});
	
	
	//삭제 처리
	$("#delete").click(function() {
		//var chkList = ;
		
		var delResult = confirm('선택한 항목을 삭제하시겠습니까?');
		
		if(delResult) {
			//예 - 삭제항목만 사라지고 refresh는 안함
			if($("input:checkbox[chkbox=complete_yn]").is(":checked") == true) {
				//삭제
				
				
			} else {
				alert("삭제할 항목을 선택해 주세요!");
			}		
			
		} else {
			//아니오
			alert("삭제가 취소되었습니다");
		}
	});

	
	
});