$(function(){
    // 自分以外のホストだった場合
    const otherHost = $("a[href^=http]:not([href*='" + location.hostname + "'])");
    // リンク先がPDFだった場合
    const linkPdf = $("a[href$='.pdf']");
    // 別ウィンドウでかつ遷移元ページを変更させない
    otherHost.add(linkPdf).attr({
        'target':'_blank',
        'rel':'noopener'
    });
});