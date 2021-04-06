$(document).on('click', "a", e => {
    const link = e.target;
    if ($(link).attr('target') === 'main' && $(link).attr('name')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const name = $(link).attr('name');
        const href = window.location.href
            .replace('scripts/public/pu_left_menu_node_xml.asp?path=/', '')
            .replace(/html\/left_menu.*$/, `html/${name}.html`);
        window.open(href, '_blank');
    }
});
