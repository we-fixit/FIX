<?php

namespace newsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('newsBundle:Default:index.html.twig');
    }
}
