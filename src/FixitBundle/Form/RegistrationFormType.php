<?php
/**
 * Created by PhpStorm.
 * User: houssem
 * Date: 12/02/2019
 * Time: 15:15
 */

namespace FixitBundle\Form;


use FixitBundle\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseRegistrationFormType;
class RegistrationFormType extends  AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('prenom')
            ->add('adresse')
            ->add('roles', ChoiceType::class, array('label' => 'Type utilisateur ',
                'choices' => array(
                'PRESTATAIRE' => 'ROLE_PRESTATAIRE',
                'CLIENT' => 'ROLE_CLIENT'),
                'required' => true,
                'multiple' => true,))

        ;
    }

    public function getParent()
    {
         return BaseRegistrationFormType::class;
    }

}