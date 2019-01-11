// note: key library was modified to enable capture in addEventListener

(function() {
    var idx = 0;
    var select = function(focus) {
        $('div.r a').css('background-color', 'inherit');
        var link = $('div.r:nth('+idx+') a');
        link.css('background-color', '#fcc');
        if (focus) {link.focus(); }
        return link;
    };
    key('⌘+return', function(ev) {
        var link = select();
        window.open(link.attr('href'));
        ev.stopPropagation();
        ev.preventDefault();
    });
    key('return', function(ev) {
        var link = select();
        location.href = link.attr('href');
        ev.stopPropagation();
        ev.preventDefault();
    });
    
    key('l', function(ev) {
        var link = $('#pnnext');
        if (link.length){
                location.href = link.attr('href');
        }
        ev.stopPropagation();
        ev.preventDefault();
    });
    key('h', function(ev) {
        var link = $('#pnprev');
        if (link.length){
                location.href = link.attr('href');
        }
        ev.stopPropagation();
        ev.preventDefault();
    });
    

    var node = null;

    $(function() {
        document.getElementById('main').addEventListener("DOMSubtreeModified", function () {
            var newNode = $('div.r:nth(0) a');
            if (!node || (node.attr('href') != newNode.attr('href'))) {
                idx = 0;
                select(true);
                node = newNode;
            }
        });
    });

    key('j', function(ev) {
        if (idx < $('div.r a').length-1) {
            idx++;
            select(true);
        }
        ev.stopPropagation();
    });
    key('k', function(ev) {
        if (idx > 0) {
            idx--;
            select(true);
        }
        ev.stopPropagation();
    });
    key('/', function(ev) {
        $('input.gLFyf.gsfi').select();
        ev.stopPropagation();
        ev.preventDefault();
    });
    $(function() {
    	$('div.hdtb-mitem a').each(function(index){

		$(this).html($(this).text() + '(' + (index+1).toString()+ ')');
		var url = $(this).attr('href');
		if (index < 9){
			key((index+1).toString(), function(ev){
				location.href = url
				ev.stopPropagation();
				ev.preventDefault();
			});
		}
	});

    });
    $(function() {
    	$('span.spell_orig').html( $('span.spell_orig').text() + '(press i to search origin keyword)<br>');
	if (! $('a.spell_orig').text()){
	    	$('span.spell').html( $('span.spell').text() + '(press i to search revised keyword)<br>');
	}
    });
    key('i', function(ev) {
        var link = $('a.spell_orig');
	if (! link.length || ! link.text()){
		link = $('a.spell');
	}
        if (link.length && link.text()){
                location.href = link.attr('href');
        }
        ev.stopPropagation();
        ev.preventDefault();
    });
    	
})();
