<?php
require_once(__DIR__ . '/config.php');

$path = $_SERVER['REQUEST_URI'];

if (strstr($path, "films") && !$data = apcu_fetch(md5($path))) {

    $siteMap = __DIR__ . "/../sitemap.xml";

    if (file_exists($siteMap)) {
        $rss = new DOMDocument();
        $rss->load($siteMap);
        $nodes = $rss->getElementsByTagName('url');

        foreach ($nodes as $item) {
            $url = $item->getElementsByTagName('loc')->item(0)->nodeValue;
            $url = str_replace($WWW_URL, '', $url);
            $url = str_replace('https://', '//', $url);
            $url = str_replace('http://', '//', $url);
            // Remove any domain from the URL to get just the path
            $url = preg_replace('#^//[^/]+#', '', $url);
            $data = [];

            if (strstr($path, $url)) {
                $img = $item->getElementsByTagName('image');
                $data['image_url'] = $img->item(0)->childNodes->item(1)->nodeValue;
                $data['title'] = $img->item(0)->childNodes->item(3)->nodeValue;
                $data['caption'] = $img->item(0)->childNodes->item(5)->nodeValue;
                break;
            }

        }

        apcu_add(md5($path), $data);
    }

}

if (!empty($data)) {
    echo "" . '<title>' . $data['title'] . ' - ' . $SITE_NAME . '</title>' . "\n";
    echo "\t\t" . '<meta name="description" content="' . $data['caption'] . '" />' . "\n";
    echo "\t\t" . '<meta property="og:title" content="' . $data['title'] . '" />' . "\n";
    echo "\t\t" . '<meta property="og:description" content="' . $data['caption'] . '" />' . "\n";
    echo "\t\t" . '<meta name="og:type" content="video.movie"/>' . "\n";       
    echo "\t\t" . '<meta property="og:image" content="' . $data['image_url'] . '" />' . "\n";
    echo "\t\t" . '<meta property="og:url" content="' . $WWW_URL . $path . '"/>' . "\n";
    echo "\t\t" . '<link rel="image_src" href="'.$data['image_url'] . '" />' . "\n";
} else {
    printDefaultHeaders();
}

function printDefaultHeaders()
{
    global $WWW_URL, $SITE_NAME;

    echo '<title>' . $SITE_NAME . ' - Vaata filme mugavalt!</title>' . "\n";
    echo "\t\t" . '<meta property="og:url" content="' . $WWW_URL . '/"/>' . "\n";
    echo "\t\t" . '<meta name="og:type" content="website"/>' . "\n";   
    echo "\t\t" . '<link rel="image_src" href="' . $WWW_URL . '/screenshot.jpg" />' . "\n";
    echo "\t\t" . '<meta property="og:image" content="' . $WWW_URL . '/screenshot.jpg"/>' . "\n";
    echo "\t\t" . '<meta property="og:description" content="Vaata mugavalt filme!"/>' . "\n";
}
