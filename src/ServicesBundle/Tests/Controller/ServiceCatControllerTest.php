<?php

namespace ServicesBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ServiceCatControllerTest extends WebTestCase
{
    public function testElec_show()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/elec_show');
    }

}
