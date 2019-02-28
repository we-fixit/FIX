<?php

namespace FixitBundle\Entity;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="FixitBundle\Repository\UserRepository")
 */
class User extends BaseUser
{
    /**
     * @return \ServicesBundle\Entity\Services
     */
    public function getServices()
    {
        return $this->services;
    }

    /**
     * @param \ServicesBundle\Entity\Services $services
     */
    public function setServices($services)
    {
        $this->services = $services;
    }



    /**
     * @var \ServicesBundle\Entity\Services
     *
     * @ORM\ManyToOne(targetEntity="ServicesBundle\Entity\Services")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_services", referencedColumnName="id")
     * })
     */


    private $services;
    /**
     * @return \ServicesBundle\Entity\Categories
     */
    public function getCategorie()
    {
        return $this->Categorie;
    }

    /**
     * @param \ServicesBundle\Entity\Categories $Categorie
     */
    public function setCategorie($Categorie)
    {
        $this->Categorie = $Categorie;
    }

    /**
     * @var \ServicesBundle\Entity\Categories
     *
     * @ORM\ManyToOne(targetEntity="ServicesBundle\Entity\Categories")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_categorie", referencedColumnName="id")
     * })
     */


    private $Categorie;
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     *
     * @Assert\NotBlank(message="", groups={"Registration", "Profile"})
     *
     */
    protected  $nom;

    /**
     * @ORM\Column(name="view", type="integer")
     *
     * @Assert\NotBlank(message="", groups={"Registration", "Profile"})
     *
     */
    protected  $view;
    /**
     * @ORM\Column(type="string", length=255)
     *
     * @Assert\NotBlank(message="", groups={"Registration", "Profile"})
     *
     */
    protected $prenom;

    /**
     * @return mixed
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * @param mixed $adresse
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;
    }

    /**
     * @ORM\Column(type="string", length=255)
     *
     * @Assert\NotBlank(message="", groups={"Registration", "Profile"})
     *
     */
    protected $adresse;
    /**
     * @return mixed
     */

    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * @param mixed $prenom
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }
    public function __construct()
    {
        parent::__construct();
        // your own logic
    }
    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    /**
     * Set view
     *
     * @param integer $view
     *
     * @return User
     */
    public function setView($view)
    {
        $this->view = $view;

        return $this;
    }

    /**
     * Get view
     *
     * @return integer
     */
    public function getView()
    {
        return $this->view;
    }
}
