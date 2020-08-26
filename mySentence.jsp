<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%// Plugins : grid,tab,datepicker,timepicker,datetimepicker,treeview,multicombo,editcombo,numerictext,numeric,editor,chart,jqcloud - Use Keyword + "," %>
<cb:pageWrapper title="MY문구" id="WAQA1420" plugin="grid,datepicker">
    <jsp:attribute name="headWrapper">
    	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<script type="text/javascript" charset="utf-8" src="/seize/waqa/WAQA1420.js"></script>
    </jsp:attribute>
    <jsp:attribute name="bodyWrapper">    	
    	<!-- Search Area -->
		<div id="DIV_SRCH" class="srchDiv" style="border:1px solid lightgray; padding:5px;">
			<table style="width:100%;">
			<tbody>
				<tr>
					<th style="width:4%;">구분</th>
					<td style="width:8%;">
						<select id="divSelect">
							<!-- 동적으로(select에 id 주고 db에서 나오는대로 불러오기) 
							<option>전체</option>
							<option>문장구간</option>
							<option>요청사항</option>
							<option>종합의견</option>
							 -->
						</select>
					</td>
					<th style="width:5%;">My문구</th>
					<td  style="width:11%;">
						<input type="text" id="srchMyStce" style="width:80px;">
					</td>
					<th style="width:5%;">사용여부</th>
					<td style="width:8%;">
						<select id="useYN">
							<option>사용</option>
							<option>미사용</option>
						</select>
					</td>
					<th style="width:5%;">사용기간</th>
					<td style="width:38%;">
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
				</tbody>
			</table>
		</div>
		<!-- //Search Area -->
		
		<!-- Grid Area -->
		<h4>My문구</h4>
		<section>
			<div class="gridHeader"> 
				<table style="width:100%; border-collapse:collapse;">
<!-- 				
					<colgroup>
						<col style="width:5%;">
						<col style="width:40%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:5%;">
					</colgroup>
 -->					
					<thead>
						<tr>
							<th style="background-color:#2e3c56; color:#fff; text-align:center;"><input type="checkbox" name="checkAll"></th>
							<th style="background-color:#2e3c56; color:#fff; text-align:center;">My문구</th>
							<th style="background-color:#2e3c56; color:#fff; text-align:center;">정렬순서</th>
							<th style="background-color:#2e3c56; color:#fff; text-align:center;">구분</th>
							<th style="background-color:#2e3c56; color:#fff; text-align:center;">사용여부</th>
							<th style="background-color:#2e3c56; color:#fff; text-align:center;">사용횟수</th>
						</tr>
					</thead>	
				</table>
			</div>
			<div class="gridContent">
				<table id="srchGrid" style="width:100%; border-collapse:collapse;">
<!-- 					
					<colgroup>
						<col style="width:5%;">
						<col style="width:40%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:5%;">
					</colgroup>
 -->					
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>												
						</tr>
					</tbody>
				</table>
			</div>
		</section>
		<!-- //Grid Area --> 
    </jsp:attribute>
</cb:pageWrapper>
