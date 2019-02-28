<?php

namespace ServicesBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * Services
 *
 * @ORM\Table(name="services")
 * @ORM\Entity(repositoryClass="ServicesBundle\Repository\ServicesRepository")
 */
class Services
{
    /**
     * @var int
     *
     * @ORM\Column(name="autorise", type="integer")
     *
     */
    private $autorise;

    /**
     * @return int
     */
    public function getAutorise()
    {
        return $this->autorise;
    }

    /**
     * @param int $autorise
     */
    public function setAutorise($autorise)
    {
        $this->autorise = $autorise;
    }
    /**
     * @return \FixitBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param \FixitBundle\Entity\User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }
    /**
     * @var \FixitBundle\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="FixitBundle\Entity\User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user", referencedColumnName="id")
     * })
     */


    private $user;
    /**
     * @var string
     * @Assert\NotBlank(message="Please, upload the product brochure as a PDF file.")
     * @Assert\Image()
     * @ORM\Column(name="image", type="string", length=255)
     */
     private $image;

    /**
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param string $image
     */
    public function setImage($image)
    {
        $this->image = $image;
    }
    /**
     * @return Categories
     */
    public function getCategorie()
    {
        return $this->Categorie;
    }

    /**
     * @param Categories $Categorie
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
    private $id;

    /**
     * @var string
     * @Assert\Length(
     *     min = 5,
     *     max = 10,
     *     minMessage = "Votre titre doit contenir au moins {{ value }} characteres",
     *     maxMessage = "Votre titre doit contenir au plus {{ value }} characteres"
     * )
     * @ORM\Column(name="titre", type="string", length=255)
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="Description", type="string", length=1000)
     */
    private $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date")
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=255)
     */
    private $telephone;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set titre
     *
     * @param string $titre
     *
     * @return Services
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Services
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Services
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set telephone
     *
     * @param string $telephone
     *
     * @return Services
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone
     *
     * @return string
     */
    public function getTelephone()
    {
        return $this->telephone;
    }
    public function __construct()
    {
        $this->date = new \DateTime();
    }


}

