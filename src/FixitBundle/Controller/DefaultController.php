<?php

namespace FixitBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('@Fixit/Default/index.html.twig');
    }
    public function adminAction()
    {

        return $this->render('@Fixit/Default/admin.html.twig');
    }
    public function contactAction()
    {

        return $this->render('@Fixit/Default/contact.html.twig');
    }

    public function aboutAction()
    {

        return $this->render('@Fixit/Default/about.html.twig');
    }

















}