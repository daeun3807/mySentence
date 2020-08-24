<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My문구</title>
</head>
<!-- jquery CDN -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<!-- jquery UI CDN -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<!-- jquery UI 링크 -->
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<!-- 언어 별 CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery.ui.datepicker-ko.min.js"></script>
<!-- Date 라이브러리 -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="MySentence.js"></script>
<style>
	* {
		font-size:10pt;
	}

	.gridHeader table tr th {
		background-color:#2e3c56; 
		color:#fff;
		font-weight:lighter;
	}

</style>
<body>
	<article class="myStce">
		<div>
			<span>[WAQA1420] My 문구</span>
			<hr style="border:1.5px solid #2e3c56;">
		</div>
			
		<!-- Search Area -->
		<div class="srchDiv" style="border:1px solid lightgray; padding:5px;">
			<table style="width:100%;">
				<tr>
					<th>구분</th>
					<td>
						<select id="divSelect">
							<option>전체</option>
							<option>문장구간</option>
							<option>요청사항</option>
							<option>종합의견</option>
						</select>
					</td>
					<th>My문구</th>
					<td>
						<input type="text" id="srchMyStce">
					</td>
					<th>사용여부</th>
					<td>
						<select id="useYN">
							<option>사용</option>
							<option>미사용</option>
						</select>
					</td>
					<th>사용기간</th>
					<td>
						<select id="usePeriod">
							<option value="yday" id="yesterday">전일</option>
							<option value="tday" id="today">당일</option>
							<option value="week" id="week">일주일</option>
							<option	value="mth"  id="month">최근1개월</option>
							<option	value="year" id="year">최근1년</option>
						</select>
						<!-- calender Area -->
						<input type="text" id="startDate" style="width:100px;">
						<input type="text" id="endDate" style="width:100px;">
					</td>
					<td class="btn" style="float:right;">
						<button id="delete">삭제</button> <!-- 체크 박스 된 애들만 삭제 -->
						<button id="search">조회</button>
					</td>
				</tr>
			</table>
		</div>
		<!-- //Search Area -->
		
		<!-- Grid Area -->
		<h4>My문구</h4>
		<section>
			<div class="gridHeader"> 
				<table border=1 style="width:100%; border-collapse:collapse;">
					<colgroup>
						<col style="width:5%;">
						<col style="width:40%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:5%;">
					</colgroup>
					<thead>
						<tr>
							<th><input type="checkbox" id="selectAll" name="chkbox" value="all"></th>
							<th>My문구</th>
							<th>정렬순서</th>
							<th>구분</th>
							<th>사용여부</th>
							<th>사용횟수</th>
						</tr>
					</thead>	
				</table>
			</div>
			<div class="gridContent">
				<table border=1 style="width:100%; border-collapse:collapse;">
					<colgroup>
						<col style="width:5%;">
						<col style="width:40%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:5%;">
					</colgroup>
					<thead>
						<tr>
							<td style="text-align:center;"><input type="checkbox" class="all"></td>
							<td>고객과의 상담시 불필요한 언행 주의 바랍니다.</td>
							<td style="text-align:center;">1</td>
							<td style="text-align:center;">요청사항</td>
							<td style="text-align:center;">사용</td>
							<td style="text-align:center;">0</td>
						</tr>
					</thead>
				</table>
			</div>
		</section>
		<!-- //Grid Area -->
	</article>
</body>
</html>