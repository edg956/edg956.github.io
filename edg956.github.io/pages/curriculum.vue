<template>
  <div class="container">
    <section class="section">
      <h1 class="title">My work experience</h1>
      <div class="content">
      	<b-tag v-for="tag in weightedTags" :key="tag" class="mr-1" rounded>{{tag}}</b-tag>
      </div>
    </section>
    <section class="section" v-for="job in experience">
      <h1 class="title">{{`${job.title} at ${job.company}`}}</h1>
      <h2 class="subtitle">{{`${job.startDate} - ${job.endDate}`}}</h2>
      <div class="content">
      	<p>{{job.description}}</p>
	<b-tag v-for="tag in job.tags" :key="tag" class="mr-1" rounded>{{tag}}</b-tag>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CurriculumPage",
  head() {
    return {
      title: "Experience",
    };
  },
  data () {
    return {
      jobs: [
      	{
	  title: "Backend Developer",
	  company: "TravelgateX",
	  startDate: '2020-03',
	  endDate: '2020-07',
	  description: 'Used .NET and C# on a REST API and Python to test the APIs migration from REST to GraphQL',
	  tags: ['C#', '.NET', 'Python']
	},
      	{
	  title: "Full Stack Developer",
	  company: "Possible Incorporated",
	  startDate: '2020-07',
	  endDate: '2021-12',
	  description: 'Used Python to build backends with Django and ETL pipelines with celery, spark and airflow for data visualization web apps with Vue.js at the front. Learned IaC with terraform to manage AWS infrastructure, set up CI/CD pipelines with Teamcity and Bitbucket and monitorization with Graylog, Grafana/Prometheus/Loki, and managed our internal Docker Swarm infrastructure',
	  tags: ['Python', 'Django', 'Docker', 'Docker Swarm', 'CI/CD', 'DevOps', 'AWS']
	},
      	{
	  title: "Software Developer",
	  company: "Lana Fintech Internacional",
	  startDate: '2022-01',
	  endDate: '2022-05',
	  description: 'Used Django REST framework to develop an API for the onboarding process of a digital wallet, including KYC, AML and identity verification. Managed applications deployed in GKE with ArgoCD and Helm. Read and applied minor patches in Go codebases as required in our microservice architecture',
	  tags: ['Python', 'Django', 'Kubernetes', 'GCP', 'Go']
	},
      	{
	  title: "Software Engineer",
	  company: "Ontruck",
	  startDate: '2022-05',
	  endDate: 'Now',
	  description: 'Develop features for a marketplace that matches businesses wanting to send pallets and truck drivers, optimising truck loads and focusing on spot orders.',
	  tags: ['Python', 'Django', 'Kubernetes', 'GCP']
	},
      ]
    }
  },
  computed: {
    experience() {
      return this.jobs.sort((a, b) => a.startDate < b.startDate ? 1 : -1)
    },
    weightedTags() {
      const tags = this.jobs.map(x => x.tags).flat()

      let weight = {}
      tags.forEach(tag => {
      	if (!weight[tag]) weight[tag] = 0;
	weight[tag] += 1;
      })
      
      return Object.keys(weight).sort((a, b) => weight[b] - weight[a]).slice(0, 5)
    }
  }
}
</script>
