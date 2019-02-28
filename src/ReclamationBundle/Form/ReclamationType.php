<?php

namespace ReclamationBundle\Form;

use Doctrine\DBAL\Types\TextType;
use Doctrine\ORM\EntityRepository;
use FixitBundle\Entity\User;
use FixitBundle\Repository\UserRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ReclamationType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('message')->add('topic',ChoiceType::class,array('choices'=>array(
            '______'=>'______',
            'Retard'=>'Retard',
            'Paiement'=>'Paiement',
             'Travail mal fait'=>'Travail mal fait',
            'Autres'=>'Autres'

        )))->add('user',EntityType::class,array('class'=>User::class, 'query_builder' => function (UserRepository $er) {
            return $er->createQueryBuilder('u')
                ->orderBy('u.roles', 'ASC')
                ->where('u.roles LIKE :role')
                ->setParameter('role', '%"'.'ROLE_PRESTATAIRE'.'"%');
        },
        'choice_label' => 'username',))->add('status',HiddenType::class)
        ;
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'ReclamationBundle\Entity\Reclamation'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'reclamationbundle_reclamation';
    }


}
