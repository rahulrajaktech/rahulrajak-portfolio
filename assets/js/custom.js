(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          	itemSelector: ".all",
          	percentPosition: true,
          	masonry: {
            columnWidth: ".all"
        }
    })

	var width = $(window).width();
		$(window).resize(function() {
			if (width > 992 && $(window).width() < 992) {
				location.reload();
			}
			else if (width < 992 && $(window).width() > 992) {
				location.reload();
			}
	})



	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-features').owlCarousel({
		items:4,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  900:{
				  items:3
			  },
			  1200:{
				  items:4
			  },
			  1800:{
				items:4
			}
		}
	})

	$('.owl-collection').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			}
		}
	})

	
	
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }


})(window.jQuery);

var jsondata = '{"0":[{"projecttype":"wordpress","label":"Current Rates of Currency ","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"When Product purchase by customer the current currency rate will convert to the country location wise using api."}],"1":[{"projecttype":"wordpress","label":"Jewellery Current Rates","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"Need to set default rate for the Jewellery and as per jewellery carets the rate will apply by current rate with making charges using api."}],"2":[{"projecttype":"wordpress","label":"Course access blocker","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"When any student wants to read more about the course then first they want to signup and purchase the course to read it."}],"3":[{"projecttype":"wordpress","label":"Form data to letterhead pdf converter and mailer","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"Form data which contain Texts, images need to send the data in the form of letterhead and get through mail which save time to passing the data through multiple channels."}],"4":[{"projecttype":"wordpress","label":"Task assessment reminder and sending report","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"When any task is assigned to the staff they get reminder alert through mail and the whole working report will be sent to the manager."}],"5":[{"projecttype":"andriod-flutter","label":"Achieva Task Management App","techstack":"dart, flutter","purpose":"The purpose of app is every employee with check work detail, Attendance, Timesheet, Reports, Payrolls, Leaves details. There are multiple of screen in it and i design some of the screens in frontend."}],"6":[{"projecttype":"andriod-flutter","label":"SSD Poha App","techstack":"dart, flutter","purpose":"SSD Poha App is client ordering to the stock requirment. In this the order will given in app and via notification the owner will know the new order is came to serve it. There are some screen like: Report, Order List, Invoice, notification list. "}],"7":[{"projecttype":"andriod-flutter","label":"Any Time Job App","techstack":"dart, flutter","purpose":"Any Time Job is use to easy job search that 1000+ jobs on one go. In This their are 2 mode Job seeker and Job provider. I Design the screen - List is Job, Job Report."}],"8":[{"projecttype":"andriod-flutter","label":"MP Courier App","techstack":"dart, flutter","purpose":"MP Courier App is based on tracking courier and support inquiries. The Courier order is placed from Courier Software and track by app. Client want there Courier status live. Moreover, this application allows you to search for the nearest located courier address within the limited radius you can easily navigate to your nearest location for fetching your consignment."}],"9":[{"projecttype":"andriod-flutter","label":"Hello Steel App","techstack":"dart, flutter","purpose":"Hello Steel is a free platform for steel industry. Single tap estimate and quotation sharing concept with educated language barrier makes it easy. Aim to work in sync with government institutions to reach more people effectively and substandard condition of Steel Industry Businessman and customers. "}],"10":[{"projecttype":"andriod-flutter","label":"Transport App","techstack":"dart, flutter","purpose":"Transport App is Book reliable goods carrier vehicles it also take care of goods transport for commercial use. It helps ensure seamless service for your postings. They track the Transport vehicle and delivery. It Include Quotation, LR (bilti), Invoices, Memo (Transit Pass) , Loading Slip, Payment Slip and Quotation."}],"11":[{"projecttype":"andriod-flutter","label":"Hotel Management App","techstack":"dart, flutter","purpose":"Hotel Management App is bringing all your daily hotel operations along with basic inventory distribution operations. the app will help you access our hotel management system along with the hotel channel manager, letting you keep a track on the happenings at your property along with several channel operations directly from your mobile devices."}],"12":[{"projecttype":"andriod-flutter","label":"Rice Mill App","techstack":"dart, flutter","purpose":"App is use to bulk order rice sourcing, branding, packaging and provide you with true and reliable market insights about live rice pricing, rice quotes and along with sales and services for our entire rang of multiple of products. Managing the storage and invetory with reporting."}],"13":[{"projecttype":"web-application","label":"General Billing and accounting Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"The software enable businesses to easily expand their business and grow their revenue. Billing process is POS system setup using quick searches, shortcuts, barcode scanning. Customer prescription management & daily reminders via SMS/ Whatsapp. Real-time stock tracking/shortage management. Integrated Financial accounting up to balance sheet, daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L. All GST returns & tax summary and evaluate your daily reports, customer history, product status. "}],"14":[{"projecttype":"web-application","label":"boxandbestow gifting application","techstack":"Codeigniter, PHP, HTML, CSS, jQuery, Javascript, SQL, REST APIs","purpose":"The application is on gifting guddies the customer for longer relationship who are taking the services from the business. The maintain the services, application helps to send gift as per requriment and customer want services in long term. The access by group of admin and managing team members. "}],"15":[{"projecttype":"web-application","label":"Courier ERP","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"The Courier Management Software manages bulk courier deliveries, simplifies functions and meets the end-to-end needs of courier and logistics companies. The software we developed allows us to manage packet distribution to courier service providers as well as provide excellent reporting, billing, and control over courier companies, so management can get clear reports on how the courier company is performing its task at all levels."}],"16":[{"projecttype":"web-application","label":"Transport ERP","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"TransportERP is a Cloud based System that enables efficient and effective management of Transport / Logistic / Warehouse operations. This software helps in logistics operation in booking of consignment, operations, tracking and monitoring of goods that are to be delivered in real time. The reports help in evaluating the daily activities in your business."}],"17":[{"projecttype":"web-application","label":"SSD Poha Mill ERP","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"The application is use to enable business work easy by the help level of steps. Using modules like Production, Packaging, Raw Material consumption the overall cost measures. Customer order management & daily reminders via SMS/ Whatsapp. The government and other type of vender provide the material which can be manage by software. Real-time stock tracking/shortage management. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, product status."}],"18":[{"projecttype":"web-application","label":"Creda MIS","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Creda management information system used for decision-making, and for the coordination, control, analysis, and visualization of information in an organization. CREDA having responsibility of promoting energy efficiency and developing energy conservation projects besides facilitating renewable energy development within Chhattisgarh State. The management information systems involves people, processes and technology in an organizational context."}],"19":[{"projecttype":"web-application","label":"Igkv MIS","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Igkv management information system used for decision-making, and for the coordination, control, analysis, and visualization of information in an organization. Department within an enterprise responsible for controlling on the internal University programs. The software is based to access level in modules wise and document entry data to all type of Igkv program to sync."}],"20":[{"projecttype":"web-application","label":"Igkv Examination application","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"Igkv Exam offers powerful and robust web-based online exam software. Software is designed for conducting online exams in a realistic and proficient environment. It is a user-friendly online exam software that automates the entire examination process. The software is also exam paper automatically after feeding all multiple of data inputs. It streamlines the exam for educational institutions and enables administrators and teachers to create, schedule, and analyse online exams."}],"21":[{"projecttype":"web-application","label":"IGKV Directorate of Farms Project","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"IGKV Directorate of Farms application is use enter data related to Farms Government report and materials. The software is generate report in PDF format and when required it will send organization team members via email. The IGKV Directorate of Farms application is access by the recipients when required to show the Farms metarial status and recipients will take support."}],"22":[{"projecttype":"web-application","label":"Building Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Building Software is work on facility plans, building plans, office layouts and more using built-in templates and intuitive tools. The module in which software is working Product Design, Prototyping Tools,Task Management, Project Management, Collaboration, Teamwork, User Story, Backlog Management,Idea Management,Product Roadmap Creation,Analytics and Reporting."}],"23":[{"projecttype":"web-application","label":"Rice Mill ERP","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Rice Mill ERP software allows you to efficiently track and control inventory movements, monitor stock levels, automate replenishment, and optimize warehouse operations.The system integrates procurement, production, inventory, sales, and finance, streamlining workflows, automating processes, and improving collaboration for greater efficiency. Software automates all processes, from transaction recording to financial reporting, resulting in accurate expense tracking & optimal cash flow."}],"24":[{"projecttype":"web-application","label":"Ace Granite Quotation Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Ace Granite Quotation Billing Software is effortlessly capture leads, swiftly create detailed quotations, and send them directly to your clients. The quotation status and convert it to an invoice or proforma invoice, streamlining your entire workflow seamlessly with create invoices, quotes, packing notes, credit notes, payment reminders."}],"25":[{"projecttype":"web-application","label":"Yellowworld Serve Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Yellowworld Serve Software is collect data of all regularly address social disparities to deliver equitable care to all community members. Yellowworld Serve Software improving communication, you can ensure that receive the most appropriate care in a timely and efficient manner and support the implementation of culturally competent care by providing tools to document and integrate cultural preferences, language needs, and religious beliefs "}],"26":[{"projecttype":"web-application","label":"Rajgharana Restuarant Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Rajgharana restaurant Software order-taking application, enables waitstaff to efficiently serve more tables, provide an exceptional guest experience, and enhance table services. No need for constant trips to the kitchen, just efficiency and happy customers. Software for restaurant order taking with real-time menu and instant order updates for faster and more accurate order management."}],"27":[{"projecttype":"web-application","label":"SmartGst Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"SmartGst Billing Software offers a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. You can streamline your invoicing processes without the need for extensive training, allowing you to focus on running and growing your business. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"28":[{"projecttype":"web-application","label":"Uniworth MIS","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Uniworth MIS application is use to enable business work easy by the help level of steps. Using modules like Production, Packaging, Raw Material consumption the overall cost measures. Customer order management & daily reminders via SMS/ Whatsapp. Uniworth management information system used for decision-making, and for the coordination, control, analysis, and visualization of information in an organization. Uniworth having responsibility of promoting energy efficiency and developing energy conservation projects besides facilitating renewable energy development within Chhattisgarh State. The management information systems involves people, processes and technology in an organizational context."}],"29":[{"projecttype":"web-application","label":"GlobalET Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"GlobalET is a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. You can streamline your invoicing processes without the need for extensive training, allowing you to focus on running and growing your business."}],"30":[{"projecttype":"web-application","label":"Gift Card Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"Gift Card Billing Software offers a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. You can streamline your invoicing processes without the need for extensive training, allowing you to focus on running and growing your business. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"31":[{"projecttype":"web-application","label":"Hotel Management and Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Hotel Management and Billing Software manages and records the day-to-day financial transactions of a hospitality business. App includes expense management, inventory management, fixed asset management, accounts receivable, and accounts payable. Hotel Management Modules are Front Desk, Point of Sales, House Keeping, Banquets/Conference, Accounting, Inventory, Payroll Management. Hotel Management and Billing Software is an all-inclusive system which simplifies the end to end of hotel operations such as front office, hotel reservations, billing, housekeeping, payments, and more by automating them and it help hotel managers and staff streamline their administrative tasks while also increasing their bookings in both the short and long-term."}],"32":[{"projecttype":"web-application","label":"Restaurant Management and Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Restaurant Management and Billing Software order-taking application, enables waitstaff to efficiently serve more tables, provide an exceptional guest experience, and enhance table services. No need for constant trips to the kitchen, just efficiency and happy customers. Software for restaurant order taking with real-time menu and instant order updates for faster and more accurate order management. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"33":[{"projecttype":"web-application","label":"Tour & Travel Management and Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"Tour & Travel Management and Billing Software is a manages and automates sales, bookings, operations, and finances for Inbound and Outbound Tour Operators, Travel Agencies. It enables them to manage their package customization, itinerary creation, and books to build a large portfolio of travel products such as hotels, flights, transfers, and activities. It automate company accounting operations such as report analysis such as balance sheet, account activity report, trial sheet, availability of various currencies and multilingual. It enables customers to save all the data necessary to provide an accurate picture of their business`s financial health. "}],"34":[{"projecttype":"web-application","label":"Website Builder Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Website Builder Management Software provide users without extensive development knowledge on how to build a website a basic platform for creating websites by utilizing templates with drag-and-drop capabilities to easily create and maintain a site. Offer a platform for creating a website. Provide unique templates for website organization, navigation, and components (e.g. pages, posts, etc.). Provide extensions for common website features such as blogs or multimedia."}],"35":[{"projecttype":"web-application","label":"Client Relation Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Client Relation Management Software helps track each interaction you have with a prospect or customer. It include sales calls, customer service interactions, marketing emails, and more. CRM Software can unify customer and company data from many sources to help better manage relationships across the entire customer lifecycle, spanning departments like marketing, sales, digital commerce, and customer service interactions. Modules in software are Contact Management, User Engagement, Invoicing, Ticketing System, Marketing Automation, Workflows, Bulk Email Campaigns, Bulk SMS Campaigns, Custom Forms, Deals Management, Proposals, Daily Digest, Employee Tracking, Lead Management, File Manager, Fully Customisable, Integrations, Task Scheduler."}],"36":[{"projecttype":"web-application","label":"Human Resources Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Human Resources Management Software comfortable to use features will help you right from Employee Onboarding to Exit. You can experience Flexible Attendance & Leave policies, Automated Payroll & Statutory Compliance, Flexible Authorization Workflow, Performance & Recruitment Management, and quick look-afters of the Expense & Reimbursements. Human Resources System (HRMS) is a digital solution that combines multiple systems and procedures to organize, administer, and achieve an organization`s entire HR objectives."}],"37":[{"projecttype":"web-application","label":"Attendance & Payroll Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Attendance & Payroll Management Software track of your staff attendance track your attendance with selfie, location, or face biometric based attendance. Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button. Manage your staff salary, PF, Advances & Deductions manage salary payments for your regular, monthly, daily, weekly, hourly, work-basis staff. You can record advances, deductions or loans and generate payslip for your staff. Record salary payments, cash-in/cash-out & Pay Online easy online payments for your staff salary, advances in bulk. Record your business expenses, cash-in and cash-out on a single platform. Send notifications to your staff and vendors keep your staff updated by sending notifications for attendance, late fine, payments. Receive reminders to help you manage your staff and business seamlessly."}],"38":[{"projecttype":"web-application","label":"Pump and Hardware Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Pump and Hardware Billing Software is a manages and automates sales, bookings, operations, and finances. Sales Management has a reliable slip management system that provides the choice of Credit bills (organized by vehicle), Payment overdue, and other similar features. Purchase ManagementBeginning with the Purchase Order, this module of pump control development keeps track of each compartment`s Receipt, and Tank stock. Inventory Control daily position of task-wise stockpiles of HSD, MS, and other goods is one of the most significant challenges in the operation of pump stations. Account Management Module get daily transaction summary, balance sheet, cash flow, fund flow statements, trading, and profit and loss statements."}],"39":[{"projecttype":"web-application","label":"Achieva Task Management ERP","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Achieva Task Management ERP is a critical feature in any company. It allows businesses to manage and track the progress of tasks as they are assigned to employees. Achieva Task Management ERP will also enable businesses to monitor individual tasks progress and identify potential bottlenecks. It enables team members to track the progress of their tasks and see how they fit into the overall project plan. Effective achieva task management ERP also helps ensure that all tasks are completed on time and within budget. The ERP include Human Resources Management features also."}],"40":[{"projecttype":"web-application","label":"House/PG Rent Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Laravel, JSON","purpose":"Manage PGs, Hostels all type process. Take bed bookings for future check-ins and avoid check-in conflicts. Manage Staff Add-Remove PG staff or better, add Managers to manage your PGs for you. Availability Track your PG`s bed availability efficiently, hassle-free. Expense Management Add and track your PG expenses to visualize the profitability and growth. Collect rent on your preferred day of the month, which can also be configured for each inmate/tenant. Rent Receipts are mail to inmates. Reports All your PG stats and data with detailed reports. Send SMS and WhatsApp reminders at will or configure to send it on your behalf automatically. Support via email, call, Perform Aadhaar KYC to validate tenant`s Aadhaar details."}],"41":[{"projecttype":"web-application","label":"HelloSteel Quotation & Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"HelloSteel Quotation & Billing Software is effortlessly capture leads, swiftly create detailed quotations, and send them directly to your clients. The quotation status and convert it to an invoice or proforma invoice, streamlining your entire workflow seamlessly with create invoices, quotes, packing notes, credit notes, payment reminders."}],"42":[{"projecttype":"web-application","label":"Vendor Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Laravel, JSON","purpose":"Vendor Management Software is allow organizations to manage their vendors consistently, through frequent collaboration and regular monitoring. Managing vendors manually is a cumbersome and time-consuming process. Vendors management tools help businesses manage costs, track quality, and measure the performance of third-party vendors. Including Cost Control, Task Delegation, Auditable Records, Vendor Performance Management. Distributed organisations wanting to standardise their processes and control costs across different geographies, business units and departments, Vendor Selection & Registration, Product & Service Offerings, Vendor Ratings & Scorecards, Custom Report Design Tools, Purchasing, Negotiations & Terms Tracking, Performance Assessments."}],"43":[{"projecttype":"web-application","label":"Vimal Agency Billing Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Vimal Agency Billing Management Software offers a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. You can streamline your invoicing processes without the need for extensive training, allowing you to focus on running and growing your business. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"44":[{"projecttype":"web-application","label":"Naturals Billing Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Naturals Billing Management Software daily tasks by automating operations, from scheduling appointments and managing clients to handling retail sales, overseeing staff, and processing payments. Online Booking, Slot blockers, Off hours booking, Package booking, Membership booking, Recurring Booking, Centralized inventory, Audits reports, Inhouse inventory, Transfer inventory, Quantity alerts, Email marketing, Get more reviews, Coupons management, Gift cards, Loyalty system, SMS campaigns, Staff commissions, Payroll, Staff Schedule, KPI reporting, Notification, Staff Role Assignments, Manage Transactions. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, customer history."}],"45":[{"projecttype":"web-application","label":"Building Bazaar Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Building Software is work on facility plans, building plans, office layouts and more using built-in templates and intuitive tools. The module in which software is working Product Design, Prototyping Tools,Task Management, Project Management, Collaboration, Teamwork, User Story, Backlog Management,Idea Management,Product Roadmap Creation,Analytics and Reporting."}],"46":[{"projecttype":"web-application","label":"Absolute Gym Billing Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Absolute Gym Billing Management Software is gym management software designed to make it easy to maintain detailed records of your members and their memberships, book classes and trainers, process and track sales, and communicate en mass with the right members at the right time. Manage client memberships and packages, schedule training sessions, track staff attendance, and seamlessly process payments. Designed to fit clubs of all sizes, this gym management software is feature-packed. With a full gym booking system, point of sale, website integration, billing integration, a mobile app for staff and members, online booking for clients, and 24/7 door access control. "}],"47":[{"projecttype":"web-application","label":"Any Time Job Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Any Time Job Management Software features allow you ease, efficiency, and convenience in listing your jobs and getting them seen by the right people. Put your listings on dozens of job boards all at once, and embed Recruiteze products directly into your company website for added visibility and simplicity. Then, you can keep applicant information acutely organized in your database!"}],"48":[{"projecttype":"web-application","label":"Online Exam application","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Online Exam application are testing students knowledge and capabilities in a remote environment using an online medium with the help of a laptop/mobile and the internet. The students can attempt exams in an online portal and the window closes once the exam is submitted by them. Online Examination System is technologically advanced software that simplifies examination activities in institutes such as defining exam timers, exam patterns with question banks, objective/ subjective question sections, conducting exams remotely in a paperless manner. Online Exam application is a comprehensive and extremely user-friendly software to conduct, monitor, and track examinations remotely. Built with advanced security features, real-time proctoring, MCQs & Descriptive test provision, the exam software is mobile-friendly & provides hands-on expertise to manage the entire exam-related activities, accurate result processing, and declaration. With analytics dashboard integration, faculty can furthermore analyze, evaluate & improve students performance in terms of academics as well as skills development."}],"49":[{"projecttype":"web-application","label":"Enhanced MultiLevel Marketing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Enhanced MultiLevel Marketing Software is a prominent multi-level marketing Software, aiming to cater to the complete network marketing business needs. It is determined to provide an unparalleled experience MLM business professionals. It is an Business Intelligent and advanced MLM software with data comprehension approach for business growth. Enhanced MultiLevel Marketing Software comes up with all advanced features. It ensures to run your business smoothly. It`s unmatched features and smooth UI/UX give a superior experience to it`s user. It helps you to fulfill all needs of your MLM business."}],"50":[{"projecttype":"web-application","label":"Kids on Wheel Billing Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Kids on Wheel Billing Management Software offers a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. You can streamline your invoicing processes without the need for extensive training, allowing you to focus on running and growing your business. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"51":[{"projecttype":"web-application","label":"Enterprise Hospital Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Enterprise Hospital Management Software serves you right as it helps you capture the right information in no time. It helps in issuing patient bills, keeps a track of the stocks, and reduces the use of paper, by sending the reports through emails and in the form of SMS. Manage appointments, billing, lab, stock and inventory, pharmacy and more. To manage medical records and improve clinical care. Organize your OPD into a paperless experience - from booking appointments, making payments, recording clinical data, getting prescription and lab reports. Provide a connected experience with integrated billing, sample collection, automated lab and electronic test reports. Supports stock indenting, distributed stores and lab management."}],"52":[{"projecttype":"web-application","label":"Raipur Government Medical College Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Raipur Government Medical College Billing Software offers a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. You can streamline your invoicing processes without the need for extensive training, allowing you to focus on running and growing your business. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"53":[{"projecttype":"web-application","label":"Advance Learning and Coaching Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"Advance Learning and Coaching Management Software is tuition management system with all in one solutions for classes. Manage your single or multibranch institues from anywhere and anytime. Submit student enquiry and manage followup or calling history. Use lead generator page to get enquiry from other platform. Manage student`s personal and educational details. Take student attendance from mobile app or by biometric device. Share assignments with students. Manage your staff records and allow your staff to login & use the smart classes system with total security control by screen rights & action rights. Create & upload your digital courses in videos or documents format securly & share with students. Create students course completion or exam completion certificate automatically in bulk. Download certificate in pdf format & print the certificate on any printer."}],"54":[{"projecttype":"web-application","label":"GreenhouseAquatech Quotation Billing Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Codeigniter, JSON","purpose":"GreenhouseAquatech Quotation Billing Software is effortlessly capture leads, swiftly create detailed quotations, and send them directly to your clients. The quotation status and convert it to an invoice or proforma invoice, streamlining your entire workflow seamlessly with create invoices, quotes, packing notes, credit notes, payment reminders. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"55":[{"projecttype":"web-application","label":"Lagnvastra Outfits Sale/Rent Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Magento","purpose":"Lagnvastra Outfits Sale/Rent Management Software improve and scale your dress or clothing rental process with our all-in-one dress rental software. Streamline your operation by closely examining your inventory and automated payments. Send automatic quotes, emails, and invoices. Automatic Invoice Generation, Online Booking with Real-time Calendar Availability, Inventory Tracking, Real-Time Online Ordering, Automatic Emails & Reminders, Accounting, Monitoring and Reporting."}],"56":[{"projecttype":"web-application","label":"Parghani Restaurant Billing Management Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, JSON","purpose":"Parghani Restaurant Billing Management Software order-taking application, enables waitstaff to efficiently serve more tables, provide an exceptional guest experience, and enhance table services. This billing system is designed as fully customizable Parighani  restaurant software. This software analyzes each step of sales for table billing and show reports sales report. Software is for only get order for tables, then generate delivery challan, final billing for table, last invoice. Software for restaurant order taking with real-time menu and instant order updates for faster and more accurate order management. Integrated Financial accounting up to daybook, debtors, and creditors management, maintain trial balance, balance sheet, and P&L, reports, customer history, inventory, sales, purchase."}],"57":[{"projecttype":"web-application","label":"Wedding Cards Full Accounting Software","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL","purpose":"Wedding Cards Full Accounting Software offers a user-friendly interface, comprehensive features, customization options, automation capabilities, integration with other tools, security measures, and responsive customer support, making it an ideal choice for businesses seeking efficient and reliable invoicing solutions. Wedding Cards Full Accounting Software is Advance & customized software. This software analyzes each step of billing and show reports like profit & Loss, Ledgers, Cash & Bank, Stocks. This software is optimized for using in all type of devices.   Features:   Quick Login to Portal. Feature enriched admin panel show all activity stats at one place. Offline and Online mode to keep working while no internet connection. Easily reachable sidebar menu for quick billing. Smooth Functionality like Sales, purchase."}],"58":[{"projecttype":"web-application","label":"Magento Extension - pupile eye prescription","techstack":"PHP, HTML, CSS, jQuery, Javascript, SQL, Magento","purpose":"Magento Extension - pupile eye prescription lens configuration Magento extension turns your digital lens store into an online place where your customers can easily purchase the lenses prescribed to them. They will have easy options to choose the lens type prescribed to them, enter details of the prescription lenses they need and do a lot more. This is another backend task you can easily perform. Just login to your Magento Dashboard using your login credentials and click the Stores option visible at the bottom of your screen and select Configuration option as well. Now you should scroll down slightly where you will see an index displaying sun colour options. You can specify the colour either by entering the colour code or also by specifying the colour`s name in plain English. Don`t forget to click the save button and save the values specified."}]}';
$datajson = $.parseJSON(jsondata);

function datashow($datanum){
	// $datanum=$datanum;	
	// console.log($datajson);
	$('#dataModalLabel').html($datajson[$datanum][0]['label']);
	$('.modal-body').html('<b>Tech Stack: </b>'+$datajson[$datanum][0]['techstack']+'<br> <b>Description:</b> '+$datajson[$datanum][0]['purpose']);
}

$('.applicationslistall').click(function(){
	$('.dsw-all').removeClass('dsw-none');
	$('.applicationslistall').hide();
});

$('.websiteslistall').click(function(){
	$('.dw-all').removeClass('dw-none');
	$('.websiteslistall').hide();
});

$("a.scrolldwn").click(function() {
	$("html, body").animate({ scrollTop: 500 }, "slow");
	return false;
  });