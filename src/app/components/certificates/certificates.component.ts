import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: string[];
  logo: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: 'Foundations of Red Hat Cloud-native Development',
      issuer: 'Red Hat',
      date: 'March 2025',
      credentialId: 'VU5VO3FVJWS0',
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEto-TydTTIfQ/company-logo_100_100/company-logo_100_100/0/1630583759577/red_hat_logo?e=1750896000&v=beta&t=Z6Pwr7aB0GAd7k2E5zb2x42RyD-BSBRIhF72nop06t0'
    },
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      date: 'December 2024',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1750896000&v=beta&t=0Q3XRhO-skN0wdsvKCgRyZ7VFwRMkTTmpr1tf2S0Ltc'
    },
    {
      title: 'Generative AI for Software Development Specialization',
      issuer: 'DeepLearning.AI',
      date: 'November 2024',
      credentialId: 'FUWS9SB6EMCZ',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSatxvqYJ1INtylvAkzUpYzXn5T1TXDXShIQ&s'
    },
    {
      title: 'Agile with Atlassian Jira',
      issuer: 'Atlassian',
      date: 'October 2024',
      credentialId: 'YZGEJYM8NG03',
      skills: ['JIRA', 'Agile', 'Agile Metotları', 'Agile Proje Yönetimi'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Atlassian_logo.svg/2560px-Atlassian_logo.svg.png'
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: 'February 2024',
      credentialId: 'SSJZMDLBZ87Z',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
    },
    {
      title: 'Project Management Professional',
      issuer: 'Google',
      date: 'June 2023',
      skills: ['Agile Proje Yönetimi', 'Proje Yönetimi'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
    },
    {
      title: 'Java (Basic)',
      issuer: 'HackerRank',
      date: 'April 2023',
      credentialId: 'a6ce27238e8f',
      skills: ['Java'],
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1750896000&v=beta&t=0Q3XRhO-skN0wdsvKCgRyZ7VFwRMkTTmpr1tf2S0Ltc'
    },
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'April 2023',
      credentialId: 'cb1fbb223ec6',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1750896000&v=beta&t=0Q3XRhO-skN0wdsvKCgRyZ7VFwRMkTTmpr1tf2S0Ltc'
    },
    {
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'March 2023',
      credentialId: '02d798c41b97',
      skills: ['SQL', 'MySQL'],
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1750896000&v=beta&t=0Q3XRhO-skN0wdsvKCgRyZ7VFwRMkTTmpr1tf2S0Ltc'
    },
    {
      title: 'Proje Yönetimi',
      issuer: 'TOBB Ekonomi ve Teknoloji Üniversitesi',
      date: 'July 2022',
      credentialId: '79730063250344',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/TOBB_ETU_logo.png/2560px-TOBB_ETU_logo.png'
    },
    {
      title: 'İş Hayatı 101',
      issuer: 'Aselsan',
      date: 'July 2022',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Aselsan_logo.svg/2560px-Aselsan_logo.svg.png'
    },
    {
      title: 'İleri Seviye Java',
      issuer: 'BTK Akademi',
      date: 'June 2022',
      credentialId: 'NowfreAw1K',
      skills: ['Spring Framework'],
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmDeK3GMjCGLKjpQUDRHU6x2uK-CYKzLPpg&s'
    },
    {
      title: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      date: 'May 2022',
      credentialId: '0C88EDE3D06D',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1750896000&v=beta&t=0Q3XRhO-skN0wdsvKCgRyZ7VFwRMkTTmpr1tf2S0Ltc'
    },
    {
      title: 'Java ile Programlamaya Giriş',
      issuer: 'BTK Akademi',
      date: 'April 2022',
      credentialId: 'dx1hAeOgjX',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmDeK3GMjCGLKjpQUDRHU6x2uK-CYKzLPpg&s'
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'April 2022',
      credentialId: '37EE825226BB',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1750896000&v=beta&t=0Q3XRhO-skN0wdsvKCgRyZ7VFwRMkTTmpr1tf2S0Ltc'
    },
    {
      title: 'Temel Ağ Teknolojileri',
      issuer: 'BTK Akademi',
      date: 'December 2021',
      credentialId: 'AJaSd6PjB0',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmDeK3GMjCGLKjpQUDRHU6x2uK-CYKzLPpg&s'
    },
    {
      title: 'Bilgi Teknolojilerine Giriş',
      issuer: 'BTK Akademi',
      date: 'November 2021',
      credentialId: 'qKrhmbj8JN',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmDeK3GMjCGLKjpQUDRHU6x2uK-CYKzLPpg&s'
    },
    {
      title: 'GIT Into Open Source',
      issuer: 'Microsoft',
      date: 'November 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png'
    },
    {
      title: 'Dijital Pazarlamanın Temelleri',
      issuer: 'Google Digital Garage',
      date: 'October 2021',
      credentialId: 'GAQ MG8 SUL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
    },
    {
      title: 'C1 Advanced English Certificate',
      issuer: 'Amerikan Kültür Dil Okulları',
      date: 'July 2021',
      credentialId: '0821791',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Amerikan_Kultur_logo.png/2560px-Amerikan_Kultur_logo.png'
    }
  ];
}