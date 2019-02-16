<?php

namespace FixitBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class FixitBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
