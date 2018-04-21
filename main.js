$(function(){
	var json;
	
	$.getJSON('https://api.myjson.com/bins/1eyqeh', function(data) {
		json = data;
		$('.grid-container').html(createHTMLString(0, json));
		$('.total').html(calculateTotal(json));
	});
	
	function generateDetails(data){
		var html = '';
		if(data.isActive == true){
			html += '<div class="indicator status active">Active</div>';
		} else {
			html += '<div class="indicator status inactive">Inactive</div>';
		};
		html += '<p class="field name">'+data.name+'</p>';
		
		html += '<div class="detailCategories">';
		
		html += '<div class="customer-info">';
		html += '<h2>Customer Info</h2>';
		html += '<p class="field age"><b>age </b> '+data.age+'</p>';
		html += '<p class="field gender"><b>gender </b> '+data.gender+'</p>';
		html += '<p class="field company"><b>company </b> '+data.company+'</p></div>';
		
		html += '<div class="interests">';
		html += '<h2>Interests</h2>';
		html += '<p class="field category"><b>category </b>Arts & Entertainment</p>';
		html += '<p class="field sub-category"><b>sub-category </b>TV & Video/Online Video</p>';
		html += '<p class="field affinity"><b>affinity </b>Movie Lovers</p></div>';
		
		html += '<div class="contacts">';
		html += '<h2>Contacts</h2>';
		html += '<p class="field email"><b>email </b> '+data.email+'</p>';
		html += '<p class="field phone"><b>phone </b> '+data.phone+'</p>';
		html += '<p class="field address"><b>address </b> '+data.address+'</p></div></div>';
		
		html += '<h2>Order History</h2>';
		html += '<div class="orderHistory">';
		html += '<div class="order"></div><div class="order"></div><div class="order"></div><div class="order"></div>';
		html += '<div class="order"></div><div class="order"></div><div class="order"></div><div class="order"></div>';
		html += '</div>';
		
		if(parseInt(data.balance.replace(",", "")) >= 0){
			html += '<div class="indicator balance positive">'+data.balance+'<i>[% - '+Math.round(0.1*parseInt(data.balance.replace(",", "")))+']</i></div></div>';
		} else {
			html += '<div class="indicator balance negative">'+data.balance+'</div>';
		};
		
		return html;
	};
	
	function calculateTotal(data){
		var ttl = 0;
		$.each(data, function(key, value) {
			ttl += parseInt(value.balance.replace(",", ""));
		});
		return 'Total Balance: '+ttl;
	};
	
	function createHTMLString(filters, data){
		var html = '';
		var index = 0;
		$.each(data, function(key, value) {
			switch(filters){
				case 0:
					html += '<div class="customer-card" id="'+index+'">';
					if(value.isActive == true){
						html += '<div class="indicator status active">Active</div>';
					} else {
						html += '<div class="indicator status inactive">Inactive</div>';
					};
					html += '<p class="field name">'+value.name+'<br>('+value.age+', '+value.gender[0].toUpperCase()+value.gender.slice(1)+')<p>';
					html += '<p class="field phone"><b>phone</b> '+value.phone+'</p>';
					html += '<p class="field email"><b>email</b> '+value.email+'</p>';
					html += '<p class="field address"><b>address</b> '+value.address+'</p>';
					if(parseInt(value.balance.replace(",", "")) >= 0){
						html += '<div class="indicator balance positive">'+value.balance+'<i>[% - '+Math.round(0.1*parseInt(value.balance.replace(",", "")))+']</i></div></div>';
					} else {
						html += '<div class="indicator balance negative">'+value.balance+'</div></div>';
					};
					break;
				case 1:
					if(parseInt(value.balance.replace(",", "")) < 0){
						html += '<div class="customer-card" id="'+index+'">';
						if(value.isActive == true){
							html += '<div class="indicator status active">Active</div>';
						} else {
							html += '<div class="indicator status inactive">Inactive</div>';
						};
						html += '<p class="field name">'+value.name+'<br>('+value.age+', '+value.gender[0].toUpperCase()+value.gender.slice(1)+')<p>';
						html += '<p class="field phone"><b>phone</b> '+value.phone+'</p>';
						html += '<p class="field email"><b>email</b> '+value.email+'</p>';
						html += '<p class="field address"><b>address</b> '+value.address+'</p>';
						if(parseInt(value.balance.replace(",", "")) >= 0){
							html += '<div class="indicator balance positive">'+value.balance+'<i>[% - '+Math.round(0.1*parseInt(value.balance.replace(",", "")))+']</i></div></div>';
						} else {
							html += '<div class="indicator balance negative">'+value.balance+'</div></div>';
						};
					};
					break;
				case 2:
					if(value.isActive != true){
						html += '<div class="customer-card" id="'+index+'">';
						if(value.isActive == true){
							html += '<div class="indicator status active">Active</div>';
						} else {
							html += '<div class="indicator status inactive">Inactive</div>';
						};
						html += '<p class="field name">'+value.name+'<br>('+value.age+', '+value.gender[0].toUpperCase()+value.gender.slice(1)+')<p>';
						html += '<p class="field phone"><b>phone</b> '+value.phone+'</p>';
						html += '<p class="field email"><b>email</b> '+value.email+'</p>';
						html += '<p class="field address"><b>address</b> '+value.address+'</p>';
						if(parseInt(value.balance.replace(",", "")) >= 0){
							html += '<div class="indicator balance positive">'+value.balance+'<i>[% - '+Math.round(0.1*parseInt(value.balance.replace(",", "")))+']</i></div></div>';
						} else {
							html += '<div class="indicator balance negative">'+value.balance+'</div></div>';
						};
					};
					break;
			};			
			index +=1;
		});
		return html
	};
	
	$('.btn-view-all').click(function(){
		$('.grid-container').html(createHTMLString(0, json));
	});
	
	$('.btn-view-debt').click(function(){
		$('.grid-container').html(createHTMLString(1, json));
	});
	
	$('.btn-view-inactive').click(function(){
		$('.grid-container').html(createHTMLString(2, json));
	});
	
	$('.grid-container').on('click', '.customer-card', function(){
		$('.customer-details-content').html(generateDetails(json[$(this).attr('id')]));
		$('.customer-details-background').css('display', 'block');
	});
	
	$('.customer-details-background').click(function(event) { 
		if(event.target == this) {
			$('.customer-details-background').css('display', 'none');
		}        
	});
	
	
});