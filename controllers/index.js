
jQuery(document).ready(function() {
    jQuery('.close').click(function() {
        // console.log('Close button clicked');
        
        // Optional: trigger another button click if necessary
        jQuery('button.ng-binding.ui.button.rounded-0.d-inline.text-white.bg-red').trigger('click');
        
        // Remove 'visible active' classes from the modal
        jQuery('.ui.modal').removeClass('visible active raised');
    });
});

var ngApp = angular.module("popupApp", []).config(function ($sceProvider) {
    $sceProvider.enabled(false);
});

var ad = null
var remote_manifest = null
var download_link = null
var payment_link = null
var phone = null
var invalid_key_link = null
let collectLength = 0;
let currentCount = 0;
var dataGrid = null;
var productsStore = null;
var lastCollectDataCount = 0;
let isClearing = false;
var emails = [];
let isDone;

var ColumnList = ["keyword", "location", "company_name", "category", "website","countryCode","phone", "email_1", "email_2", "email_3", "lat", "long", "address", "city", "state", "pincode", "rating_count", "review", "cid", "maplink"]





var _$_cd92=["indexController","developer","manifest","getManifest","runtime","welcome","model","Tabs","$fc","$auth","$config","isCheckingLicense","invalidKey","version","SOFTWARE_ID","WEBSITE_ADDRESS","loginPage","","local","getDefaultLocalModel","status","cid","findIndex","collect","email_1","email_2","email_3","forEach","ad","remote_manifest","download_link","payment_link","phone","saveLocal","$apply","getLocal","onLocalChange","activeTabUrl","url","activeTab","toggleTab","initiMaterialDesignComponents","setLocal","sendMessage","Message sent","log","toLowerCase","start","activeKeyword","trim","~in~","split","taskList","activeLocation","sendToAll","test","saveAsList","keywordList","length","filter","\x0A","keywordTextarea","locationList","locationTextarea","regexList","regexListTextarea","push","clearData","testingArray","resultCount","clear","refresh","reload","location","emailFiltered","website","download","hasValidKey","_auth","showDownloadModal","map","exportLatLong","lat","long","CSV","downloadAs","showLoginModal","countOf","indexOf","openDownloadUrl","/update.php?software_id=","focus","_blank","open","closeApp","openBuyUrl","openAdLink","destination_url","resetDownload","close","showDownloadExtensionModal","init","login","licenseKey","License Key is valid","show","snackbar","Invalid License key","Error connecting","logout","text","isShown","closeAfter","randBetween","isScrapingLatLong","stop","showItemExtensionFooter","refreshTable","percentComplete","total","completed","percent","pagePercent","toFixed",".","ngAttrStyleColor","background-color: ","controller"];ngApp[_$_cd92[127]](_$_cd92[0],function($scope,$http,$sce){$scope[_$_cd92[1]]= DEVELOPER_INFO;$scope[_$_cd92[2]]= chrome[_$_cd92[4]][_$_cd92[3]]();$scope[_$_cd92[5]]= WelcomeController[_$_cd92[6]];$scope[_$_cd92[7]]= Tabs;$scope[_$_cd92[8]]= FoxCommon;$scope[_$_cd92[9]]= Auth;$scope[_$_cd92[10]]= Config;$scope[_$_cd92[11]]= false;$scope[_$_cd92[12]]= false;$scope[_$_cd92[13]]= CURRENT_VERSION;$scope[_$_cd92[14]]= SOFTWARE_ID;$scope[_$_cd92[15]]= WEBSITE_ADDRESS;$scope[_$_cd92[16]]= {email:_$_cd92[17],password:_$_cd92[17],isLoading:false};$scope[_$_cd92[18]]= $box[_$_cd92[19]]();$box[_$_cd92[36]]((_0x6F2D)=>{$box[_$_cd92[35]]((_0x6F60)=>{$scope[_$_cd92[34]](()=>{if(emails&&  !_0x6F60[_$_cd92[20]]){emails[_$_cd92[27]]((_0x6F93)=>{let _0x6FC6=_0x6F60[_$_cd92[23]][_$_cd92[22]]((_0x6FF9)=>{return _0x6FF9[_$_cd92[21]]=== _0x6F93[_$_cd92[21]]});if(_0x6FC6!==  -1){_0x6F60[_$_cd92[23]][_0x6FC6][_$_cd92[24]]= _0x6F93[_$_cd92[24]];_0x6F60[_$_cd92[23]][_0x6FC6][_$_cd92[25]]= _0x6F93[_$_cd92[25]];_0x6F60[_$_cd92[23]][_0x6FC6][_$_cd92[26]]= _0x6F93[_$_cd92[26]]}});isDone= false};$scope[_$_cd92[18]]= _0x6F60;$scope[_$_cd92[18]][_$_cd92[28]]= ad;$scope[_$_cd92[18]][_$_cd92[29]]= remote_manifest;$scope[_$_cd92[18]][_$_cd92[30]]= download_link;$scope[_$_cd92[18]][_$_cd92[31]]= payment_link;$scope[_$_cd92[18]][_$_cd92[32]]= phone;$scope[_$_cd92[33]]();insertIntoDataTable(_0x6F60)})})});$box[_$_cd92[35]]((_0x6F60)=>{$scope[_$_cd92[34]](()=>{$scope[_$_cd92[18]]= {...$scope[_$_cd92[18]],..._0x6F60}});$box[_$_cd92[39]]((_0x702C)=>{$scope[_$_cd92[34]](()=>{$scope[_$_cd92[18]][_$_cd92[37]]= _0x702C[_$_cd92[38]]})})});$scope[_$_cd92[40]]= (_0x702C)=>{$scope[_$_cd92[18]][_$_cd92[39]]= _0x702C;$scope[_$_cd92[33]]();$scope[_$_cd92[41]]()};$scope[_$_cd92[33]]= function(){$box[_$_cd92[42]]($scope[_$_cd92[18]])};$scope[_$_cd92[43]]= function(_0x705F,_0x6F2D= {}){console[_$_cd92[45]](_$_cd92[44]);console[_$_cd92[45]](_0x705F);if(_0x705F[_$_cd92[46]]()=== _$_cd92[47]){$scope[_$_cd92[18]][_$_cd92[48]]= $scope[_$_cd92[18]][_$_cd92[52]][0][_$_cd92[51]](_$_cd92[50])[0][_$_cd92[49]]();$scope[_$_cd92[18]][_$_cd92[53]]= $scope[_$_cd92[18]][_$_cd92[52]][0][_$_cd92[51]](_$_cd92[50])[1][_$_cd92[49]]()};$box[_$_cd92[54]](_0x705F,_0x6F2D)};$scope[_$_cd92[55]]= (_0x7092)=>{console[_$_cd92[45]](_0x7092)};$scope[_$_cd92[56]]= ()=>{$scope[_$_cd92[18]][_$_cd92[57]]= $scope[_$_cd92[18]][_$_cd92[61]][_$_cd92[51]](_$_cd92[60])[_$_cd92[59]]((_0x70F8)=>{return _0x70F8[_$_cd92[58]]});$scope[_$_cd92[18]][_$_cd92[62]]= $scope[_$_cd92[18]][_$_cd92[63]][_$_cd92[51]](_$_cd92[60])[_$_cd92[59]]((_0x70F8)=>{return _0x70F8[_$_cd92[58]]});$scope[_$_cd92[18]][_$_cd92[64]]= $scope[_$_cd92[18]][_$_cd92[65]][_$_cd92[51]](_$_cd92[60])[_$_cd92[59]]((_0x70F8)=>{return _0x70F8[_$_cd92[58]]});let _0x70C5=[];$scope[_$_cd92[18]][_$_cd92[57]][_$_cd92[27]]((_0x712B)=>{$scope[_$_cd92[18]][_$_cd92[62]][_$_cd92[27]]((_0x715E)=>{_0x70C5[_$_cd92[66]]((""+_0x712B+_$_cd92[50]+_0x715E+_$_cd92[17]))})});$scope[_$_cd92[18]][_$_cd92[52]]= _0x70C5;console[_$_cd92[45]]($scope[_$_cd92[18]][_$_cd92[52]]);console[_$_cd92[45]]($scope[_$_cd92[18]]);$scope[_$_cd92[33]]($scope[_$_cd92[18]])};$scope[_$_cd92[67]]= function(){$scope[_$_cd92[18]][_$_cd92[23]]= [];$box[_$_cd92[35]]((_0x6F60)=>{_0x6F60[_$_cd92[23]]= [];_0x6F60[_$_cd92[68]]= [];$box[_$_cd92[42]](_0x6F60)});$scope[_$_cd92[18]][_$_cd92[23]]= [];$scope[_$_cd92[18]][_$_cd92[68]]= [];$scope[_$_cd92[18]][_$_cd92[69]]= 0;$scope[_$_cd92[18]][_$_cd92[48]]= _$_cd92[17];$scope[_$_cd92[18]][_$_cd92[53]]= _$_cd92[17];$scope[_$_cd92[33]]();function _0x7191(){productsStore[_$_cd92[70]]();dataGrid[_$_cd92[71]]()}_0x7191();setTimeout(()=>{window[_$_cd92[73]][_$_cd92[72]]()},2000)};$scope[_$_cd92[74]]= ()=>{const _0x71C4=$scope[_$_cd92[18]][_$_cd92[23]];return _0x71C4[_$_cd92[59]]((_0x70F8)=>{return !_0x70F8[_$_cd92[24]]&& _0x70F8[_$_cd92[75]]})[_$_cd92[58]]};$scope[_$_cd92[76]]= async ()=>{if($scope[_$_cd92[18]][_$_cd92[78]][_$_cd92[77]]){$scope[_$_cd92[18]][_$_cd92[79]]= true;$scope[_$_cd92[33]]();const _0x722A=$scope[_$_cd92[18]][_$_cd92[23]][_$_cd92[80]]((_0x6FF9)=>{return mapDataTableToSql(_0x6FF9)});let _0x71F7=ColumnList;if(!$scope[_$_cd92[18]][_$_cd92[81]]){_0x71F7= _0x71F7[_$_cd92[59]]((_0x6FF9)=>{return _0x6FF9!= _$_cd92[82]&& _0x6FF9!= _$_cd92[83]})};$fc[_$_cd92[85]][_$_cd92[84]]($scope[_$_cd92[18]][_$_cd92[23]],"Leads",_0x71F7);$scope[_$_cd92[18]][_$_cd92[79]]= false;$scope[_$_cd92[33]]()}else {$scope[_$_cd92[18]][_$_cd92[86]]= true;$scope[_$_cd92[33]]()}};$scope[_$_cd92[87]]= (_0x725D)=>{let _0x7290=[];$scope[_$_cd92[18]][_$_cd92[23]][_$_cd92[27]]((_0x72C3)=>{let _0x7092=_0x72C3[_0x725D];if(_0x7290[_$_cd92[88]](_0x72C3[_0x725D])==  -1&& _0x7092){_0x7290[_$_cd92[66]](_0x72C3[_0x725D])}});return _0x7290[_$_cd92[58]]};$scope[_$_cd92[89]]= ()=>{var _0x72F6=("https://"+WEBSITE_ADDRESS+_$_cd92[90]+SOFTWARE_ID+_$_cd92[17]);window[_$_cd92[93]](_0x72F6,_$_cd92[92])[_$_cd92[91]]();$scope[_$_cd92[94]]()};$scope[_$_cd92[95]]= ()=>{window[_$_cd92[93]]($scope[_$_cd92[18]][_$_cd92[31]],_$_cd92[92])[_$_cd92[91]]()};$scope[_$_cd92[96]]= ()=>{window[_$_cd92[93]]($scope[_$_cd92[18]][_$_cd92[28]][_$_cd92[97]],_$_cd92[92])[_$_cd92[91]]()};$scope[_$_cd92[94]]= ()=>{$scope[_$_cd92[98]]();window[_$_cd92[99]]()};$scope[_$_cd92[98]]= ()=>{$scope[_$_cd92[18]][_$_cd92[100]]= false;$scope[_$_cd92[18]][_$_cd92[30]]= null;$box[_$_cd92[42]]($scope[_$_cd92[18]])};$scope[_$_cd92[41]]= ()=>{MaterialDesignLite[_$_cd92[101]]()};$scope[_$_cd92[41]]();$scope[_$_cd92[102]]= ()=>{$scope[_$_cd92[11]]= true;Auth[_$_cd92[102]]($scope[_$_cd92[103]],{authSuccess:(_0x7329)=>{$scope[_$_cd92[18]][_$_cd92[78]][_$_cd92[103]]= $scope[_$_cd92[103]];$scope[_$_cd92[18]][_$_cd92[78]][_$_cd92[77]]= true;$scope[_$_cd92[18]][_$_cd92[86]]= false;$scope[_$_cd92[33]]();$scope[_$_cd92[106]][_$_cd92[105]](_$_cd92[104])},authFailed:(_0x7329)=>{$scope[_$_cd92[12]]= true;$scope[_$_cd92[106]][_$_cd92[105]](_$_cd92[107])},error:()=>{$scope[_$_cd92[106]][_$_cd92[105]](_$_cd92[108]);$scope[_$_cd92[18]][_$_cd92[78]][_$_cd92[77]]= true;$scope[_$_cd92[18]][_$_cd92[86]]= false},complete:()=>{$scope[_$_cd92[34]](()=>{$scope[_$_cd92[11]]= false})}})};$scope[_$_cd92[109]]= ()=>{Auth[_$_cd92[109]]()};$scope[_$_cd92[106]]= {isShown:false,text:_$_cd92[17],show:(_0x738F,_0x735C= 3)=>{$scope[_$_cd92[106]][_$_cd92[110]]= _0x738F;$scope[_$_cd92[106]][_$_cd92[111]]= true;$scope[_$_cd92[106]][_$_cd92[112]](_0x735C)},hide:()=>{$scope[_$_cd92[106]][_$_cd92[111]]= false},closeAfter:(_0x735C)=>{setTimeout(()=>{$scope[_$_cd92[34]](()=>{$scope[_$_cd92[106]][_$_cd92[111]]= false})},_0x735C* 1000)}};$scope[_$_cd92[101]]= ()=>{setTimeout(()=>{},$fc[_$_cd92[113]](300,700));setTimeout(()=>{$scope[_$_cd92[34]](()=>{console[_$_cd92[45]]($scope[_$_cd92[18]][_$_cd92[23]]);$scope[_$_cd92[18]][_$_cd92[114]]= false;$scope[_$_cd92[18]][_$_cd92[20]]= false;$scope[_$_cd92[43]](_$_cd92[115]);$scope[_$_cd92[116]]= true})},200)};$scope[_$_cd92[117]]= ()=>{setTimeout(()=>{buildDataTable()},2000)};$scope[_$_cd92[118]]= ()=>{let _0x6F2D={};_0x6F2D[_$_cd92[119]]= $scope[_$_cd92[18]][_$_cd92[61]][_$_cd92[51]](_$_cd92[60])[_$_cd92[59]]((_0x70F8)=>{return _0x70F8[_$_cd92[58]]})[_$_cd92[58]]* $scope[_$_cd92[18]][_$_cd92[63]][_$_cd92[51]](_$_cd92[60])[_$_cd92[59]]((_0x70F8)=>{return _0x70F8[_$_cd92[58]]})[_$_cd92[58]];_0x6F2D[_$_cd92[120]]= _0x6F2D[_$_cd92[119]]- $scope[_$_cd92[18]][_$_cd92[52]][_$_cd92[58]];_0x6F2D[_$_cd92[121]]= ((_0x6F2D[_$_cd92[120]]/ _0x6F2D[_$_cd92[119]])* 100);return _0x6F2D};$scope[_$_cd92[122]]= ()=>{let _0x6F2D={};_0x6F2D[_$_cd92[119]]= 20;_0x6F2D[_$_cd92[120]]= $scope[_$_cd92[18]][_$_cd92[23]][_$_cd92[58]];_0x6F2D[_$_cd92[121]]= _$_cd92[17]+ (_0x6F2D[_$_cd92[120]]/ _0x6F2D[_$_cd92[119]])[_$_cd92[123]](2);_0x6F2D[_$_cd92[121]]= _0x6F2D[_$_cd92[121]][_$_cd92[51]](_$_cd92[124])[1];return _0x6F2D};$scope[_$_cd92[125]]= function(_0x73C2){return _$_cd92[126]+ _0x73C2};$scope[_$_cd92[101]]()})
	




const rgbToHex = (r, g, b) => '#' + [+r, +g, +b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

const EMAIL_REGEX = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
const LINK_REGEX = /<(a).*?href=(\"|')(.+?)(\"|').*?>/gi
var emails = []
var lastCollectDataCount = 0;
let count = 0;
let emailResults = [];


function scrapeEmailQueue(cid, data, local) {
    if (local.extractEmail && data.website && local.status) {
        fetch(data.website, { redirect: 'follow' }).then(res => res.text()).then(text => {
            // console.log(`Scrape email from ${data.website}`);

            let emailList = text ? text.match(EMAIL_REGEX) : [];
            emailList = emailList || [];
            const links = _.uniq([...text.matchAll(LINK_REGEX)].map(l => l[3]).filter(l => l.startsWith(data.website)));

            let index = 0;
            const startTime = Date.now();

            (function processLinks() {
                if (Date.now() - startTime < +local.maxTimeForMail * 1000 && index < links.length) {
                    fetch(links[index])
                        .then(r => r.text())
                        .then(linkText => {
                            let newEmails = linkText ? linkText.match(EMAIL_REGEX) : [];
                            emailList = [...emailList, ...(newEmails || [])];

                            index++;
                            setTimeout(processLinks, 500);
                        })
                        .catch(err => {
                            console.error(`Error fetching link ${links[index]}:`, err);
                            index++;
                            setTimeout(processLinks, 500);
                        });
                } else {
                    if (local.regexList) {
                        const regexList = local.regexList.map(e => RegExp(String.raw`${e}`, "gi"));
                        emailList = emailList.filter(email => regexList.every(regex => !email.match(regex)));
                    }

                    emailList = _.uniq(emailList);

                    data.email_1 = emailList[0] || '';
                    data.email_2 = emailList[1] || '';
                    data.email_3 = emailList[2] || '';

                    emails.push({
                        cid,
                        email_1: data.email_1,
                        email_2: data.email_2,
                        email_3: data.email_3
                    });

                    updateDataTable({ collect: [{ cid, ...data }] });

                    if (!local.taskList || local.taskList.length === 0) {
                        if(local.status){
                            local.status = false;
                            $box.setLocal(local);
                        }
                        isDone = true;
                        // console.log('All tasks completed, setting status to false.');
                    }
                }
            })();

        }).catch(err => {
            //console.error(err);
            updateDataTable({ collect: [{ cid, ...data, email_1: "", email_2: '', email_3: '' }] });

            if (!local.taskList || local.taskList.length === 0) {
                if(local.status){
                    local.status = false;
                    $box.setLocal(local);
                }
                isDone = true;
                // console.log('Error encountered, setting status to false.');
            }
        });
    } else if (local.extractEmail && !data.website) {
        updateDataTable({ collect: [{ cid, ...data, email_1: "", email_2: '', email_3: '' }] });

        if (!local.taskList || local.taskList.length === 0) {
            if(local.status){
                local.status = false;
                $box.setLocal(local);
            }
            isDone = true;
            // console.log('No website found, setting status to false.');
        }
    }
}




function insertIntoDataTable(local) {
    $box.getLocal(local => {
        if (local.collect.length > 0) {
            const maxEntries = 100;
            const entriesToPush = local.collect.slice(0,maxEntries);

            let index = 0;

            function pushEntryWithDelay() {
                if (index < entriesToPush.length) {
                    const currentData = entriesToPush[index];

                    productsStore.push([{ type: "insert", key:'cid', data: currentData }]);
                    index++;
                    setTimeout(pushEntryWithDelay, 1000);


                }
            }
            pushEntryWithDelay();
            const toScrape = local.collect.slice(lastCollectDataCount);
            if (toScrape.length) {

                toScrape.forEach((e) => {
                    scrapeEmailQueue(e.cid, e, local);
                });
            }
            lastCollectDataCount = local.collect.length;
        }
    })
}




function updateDataTable(local) {
    local.collect.forEach(each => {
        productsStore.push([{ type: "update", key: each.cid, data: each }]);
    });
}

function buildDataTable() {
    $box.getLocal(local => {
        productsStore = new DevExpress.data.ArrayStore({
            key: "cid",
            data: local.collect
        });

        dataGrid = $("#gridContainer").dxDataGrid({
            showBorders: true,
            filterRow: { visible: true, applyFilter: "auto" },
            searchPanel: { visible: true, width: 240, placeholder: "Search..." },
            headerFilter: { visible: true },
            paging: { enable: false, pageSize: 50 },
            pager: {
                showPageSizeSelector: true,
                showNavigationButtons: true,
                allowedPageSizes: [25, 50, 100],
                showInfo: true
            },
            dataSource: { store: productsStore, reshapeOnPush: true },
            allowColumnResizing: true,
            showBorders: true,
            columnMinWidth: 50,
            columnAutoWidth: true,
            columns: ColumnList.map(each => {
                if (local.extractEmail && each.includes('email_')) {
                    return {
                        dataField: each,
                        width: 180,
                        allowSorting: true,
                        cellTemplate: function (container, options) {
                            $("<div>").append(!_.isNil(options.data[each])
                                ? options.data[each]
                                : "<p><b>fetching email</b><i class='ui icon spinner black loading'></i></p>").appendTo(container);
                        }
                    };
                } else if ((each.includes("lat") || each.includes("long")) && !local.exportLatLong) {
                    return;  // Skip columns if lat/long export not enabled
                } else {
                    return { dataField: each, width: 180, allowResizing: true };
                }
            }),
            columnResizingMode: "widget",
            bindingOptions: {
                columnResizingMode: "columnResizingMode",
            }
        }).dxDataGrid("instance");
    });
}

const mapDataTableToSql = (dtRow, cid) => {
    return {
        a_id: A_ID || '777˘',
        cid,
        Category: dtRow.keyword,
        SubCategory: dtRow.category,
        Location: dtRow.location,
        BusinessName: dtRow.company_name,
        Rating: dtRow.rating_count,
        Address: dtRow.address,
        State: dtRow.state,
        Country: dtRow.country || '',
        City: dtRow.city,
        Zip: dtRow.pincode,
        Phone: dtRow.phone,
        Mail: dtRow.email_1,
        Mail2: dtRow.email_2,
        Mail3: dtRow.email_3,
        Latitude: dtRow.lat,
        Longitude: dtRow.long,
        Website: dtRow.website,
        Review: dtRow.review,
        Date: new Date()
    }
}

// On Window Load
$(() => {
    buildDataTable();

    // Fetch and set initial data
    $box.getLocal(async (local) => {
        // Initialize local variables
        local.showDownloadExtensionModal = false;
        local.download_link = null;
        local.phone = null;
        local.payment_link = null;
        local.remote_manifest = null;
        local.ad = null;


        if (!local.taskList.length && local.allDataLoaded) {
            local.status = false;
        }
        $box.setLocal(local);

        // Fetch the version info
        setTimeout(async () => {
            try {
                const versionRes = await fetch(`https://b2bleadsextractor.com/api/gmapparser/version.php`);
                const v = await versionRes.json();
                if (v.version_number !== null && +v.version_number > CURRENT_VERSION) {
                    local.software_pcolor = "white";
                    local.software_scolor = "white";
                    local.showDownloadExtensionModal = true;
                    local.download_link = v.download_link;
                    $box.setLocal(local);
                }
            } catch (error) {
                // console.log('Version check unsuccessful', error);
            }
        }, 6000);
    });

    // Fetch ad info after a short delay
    setTimeout(() => {
        fetch(`https://b2bleadsextractor.com/api/gmapparser/adinfo.php?aid=${A_ID}`).then(res => res.json()).then(v => {

            $box.getLocal(local => {
                phone = v.phone
                payment_link = v.payment_link
                software_pcolor = rgbToHex(...v.software_pcolor.split(','))
                software_scolor = rgbToHex(...v.software_scolor.split(','))
                invalid_key_link = v.invalid_key_link
                remote_manifest = {
                    company_logo: v.company_logo,
                    software_icon: v.software_icon,
                    software_name: v.software_name
                }
                ad = {
                    display: v.display === 'yes',
                    destination_url: v.destination_url,
                    ad_image: v.ad_image
                }

                local.phone = phone
                local.payment_link = payment_link
                local.remote_manifest = remote_manifest
                local.ad = ad
                local.software_pcolor = software_pcolor
                local.software_scolor = software_scolor
                local.invalid_key_link = invalid_key_link

                // console.log(`${software_pcolor} ${software_scolor}`)

                $box.setLocal(local)

            })
        }).catch(e => {
            // console.log(e)
        });
    }, 100);

    // Add 'Results per page' text
    setInterval(() => {
        const selector = $('.dx-page-sizes');
        const text = selector.text();
        if (!text.includes("Results per page")) {
            selector.prepend('Results per page : ');
        }
    }, 4000);

});
