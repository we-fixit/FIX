<?php
/**
 * Created by PhpStorm.
 * User: houssem
 * Date: 12/02/2019
 * Time: 15:15
 */

namespace FixitBundle\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseRegistrationFormType;
class RegistrationFormType extends  AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('prenom')
            ->add('adresse');
    }

    public function getParent()
    {
         return BaseRegistrationFormType::class;
    }

}