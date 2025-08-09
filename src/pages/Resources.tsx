import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { BookOpen, Play, Download, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const courses = [
    {
      id: 1,
      title: "Database Management Systems",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      duration: "12 weeks",
      students: 45,
      rating: 4.8,
      thumbnail: "🗄️",
      lessons: 24,
      category: "Computer Science"
    },
    {
      id: 2,
      title: "Digital Signal Processing",
      instructor: "Prof. Michael Chen",
      progress: 60,
      duration: "10 weeks",
      students: 38,
      rating: 4.6,
      thumbnail: "📡",
      lessons: 20,
      category: "Electronics"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Emily Davis",
      progress: 30,
      duration: "14 weeks",
      students: 52,
      rating: 4.9,
      thumbnail: "🤖",
      lessons: 28,
      category: "AI/ML"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Academic Writing Guidelines",
      type: "PDF",
      size: "2.5 MB",
      downloads: 1234,
      category: "Academic",
      icon: "📄"
    },
    {
      id: 2,
      title: "Research Methodology Handbook",
      type: "PDF",
      size: "5.8 MB",
      downloads: 892,
      category: "Research",
      icon: "📖"
    },
    {
      id: 3,
      title: "Citation Style Guide",
      type: "PDF",
      size: "1.2 MB",
      downloads: 567,
      category: "Academic",
      icon: "📝"
    },
    {
      id: 4,
      title: "Programming Best Practices",
      type: "PDF",
      size: "3.4 MB",
      downloads: 2145,
      category: "Programming",
      icon: "💻"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Learning Resources - Permission Portal+",
    description: "Access educational materials, courses, and academic resources curated by your institution.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-6 w-6 text-brand-teal" />
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Learning Resources
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Access curated educational materials, courses, and academic resources from your institution.
          </p>
        </header>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <article key={course.id} className="rounded-xl border bg-card shadow-sm hover:shadow-elegant transition-shadow overflow-hidden">
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{course.thumbnail}</div>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <h3 className="font-medium mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>
                    
                    <div className="space-y-3">
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-brand-teal h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Course Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <Button className="w-full" variant="outline">
                      <Play className="mr-2 h-4 w-4" />
                      Continue Learning
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid gap-4">
              {resources.map((resource) => (
                <article key={resource.id} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-elegant transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{resource.icon}</div>
                      <div>
                        <h3 className="font-medium mb-1">{resource.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{resource.category}</Badge>
                          <span>{resource.type} • {resource.size}</span>
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {resource.downloads} downloads
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Getting Started with Permission Requests", duration: "5 min", type: "Video", thumbnail: "📹" },
                { title: "How to Track Your Applications", duration: "3 min", type: "Video", thumbnail: "📊" },
                { title: "Understanding Approval Workflows", duration: "7 min", type: "Video", thumbnail: "🔄" },
                { title: "Digital Noticeboard Features", duration: "4 min", type: "Video", thumbnail: "📋" }
              ].map((tutorial, index) => (
                <article key={index} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-elegant transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{tutorial.thumbnail}</div>
                    <div>
                      <h3 className="font-medium mb-1">{tutorial.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline">{tutorial.type}</Badge>
                        <span>{tutorial.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Tutorial
                  </Button>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="library" className="space-y-6">
            <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Digital Library</h3>
              <p className="text-muted-foreground mb-6">
                Access thousands of academic papers, journals, and research materials.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Button variant="outline">Browse Journals</Button>
                <Button variant="outline">Research Papers</Button>
                <Button variant="outline">E-Books</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "IEEE Digital Library", access: "Full Access", icon: "🔬" },
                { title: "ACM Digital Library", access: "Full Access", icon: "💾" },
                { title: "Springer Nature", access: "Limited Access", icon: "📚" },
                { title: "ScienceDirect", access: "Full Access", icon: "🧪" },
                { title: "arXiv", access: "Open Access", icon: "📄" },
                { title: "Google Scholar", access: "Open Access", icon: "🔍" }
              ].map((library, index) => (
                <div key={index} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-elegant transition-shadow">
                  <div className="text-2xl mb-3">{library.icon}</div>
                  <h3 className="font-medium mb-2">{library.title}</h3>
                  <Badge variant="outline" className="mb-4">
                    {library.access}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    Access Library
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Resources;