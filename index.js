
function calculateewes() {
		var popeningewes = document.getElementById('openingewes').value;
		var pnosoldtransewes = document.getElementById('nosoldtransewes').value;
		var pnopurchewes = document.getElementById('nopurchewes').value;
    var pclosingewes = document.getElementById('closingewes').value;
    var pnatincewes = document.getElementById('natincewes');
		var ppnatincewes = parseInt(pclosingewes) - parseInt(popeningewes) + parseInt(pnosoldtransewes) - parseInt(pnopurchewes);
		natincewes.value = ppnatincewes;

}

function calculatewethers() {
		var pow = document.getElementById('openingwethers').value;
		var pnstw = document.getElementById('nosoldtranswethers').value;
		var pnpw = document.getElementById('nopurchwethers').value;
    var pcw = document.getElementById('closingwethers').value;
    var pniw = document.getElementById('natincwethers');
		var ppniw = parseInt(pcw) - parseInt(pow) + parseInt(pnstw) - parseInt(pnpw);
		natincwethers.value = ppniw;

}
