import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Shield, Sparkles, CheckCircle2, Clock, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [portalType, setPortalType] = useState<"student" | "staff">("student");
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend-ready: Replace with actual API call to Django
    // const response = await fetch('/api/auth/login', { method: 'POST', body: formData });
    if (portalType === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/staff/dashboard");
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Approvals",
      description: "Hierarchical permission system with weighted approvals"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Monitor your requests through every approval stage"
    },
    {
      icon: FileCheck,
      title: "Digital Records",
      description: "Eliminate paper trails with digital documentation"
    },
    {
      icon: Sparkles,
      title: "Campus Connect",
      description: "Network and engage with your campus community"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Permission Portal+",
    description: "Secure hierarchical permission system for academic institutions",
    applicationCategory: "EducationApplication"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-brand-emerald" />
            <span className="font-bold text-xl">Permission Portal+</span>
          </div>
          <Button variant="outline" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-hero-gradient bg-clip-text text-transparent">
              Streamline Campus Permissions
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Replace paper trails with secure, digital approvals. Connect with your campus community 
              and manage permissions seamlessly.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2" variant="premium">
                <GraduationCap className="h-5 w-5" />
                Student Portal
              </Button>
              <Button size="lg" className="gap-2" variant="hero">
                <Users className="h-5 w-5" />
                Staff Portal
              </Button>
            </div>
          </div>

          {/* Right: Auth Forms */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Choose your portal and {isLogin ? "sign in" : "create an account"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={portalType} onValueChange={(v) => setPortalType(v as "student" | "staff")}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="student">Student</TabsTrigger>
                  <TabsTrigger value="staff">Staff</TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                  <form onSubmit={handleAuth} className="space-y-4">
                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="student-name">Full Name</Label>
                        <Input id="student-name" placeholder="John Doe" required />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email</Label>
                      <Input id="student-email" type="email" placeholder="student@university.edu" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password</Label>
                      <Input id="student-password" type="password" placeholder="••••••••" required />
                    </div>
                    {!isLogin && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="student-id">Student ID</Label>
                          <Input id="student-id" placeholder="20XX-CS-XXX" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Input id="department" placeholder="Computer Science" required />
                        </div>
                      </>
                    )}
                    <Button type="submit" className="w-full" variant="premium">
                      {isLogin ? "Sign In" : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="staff">
                  <form onSubmit={handleAuth} className="space-y-4">
                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="staff-name">Full Name</Label>
                        <Input id="staff-name" placeholder="Dr. Jane Smith" required />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="staff-email">Email</Label>
                      <Input id="staff-email" type="email" placeholder="staff@university.edu" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="staff-password">Password</Label>
                      <Input id="staff-password" type="password" placeholder="••••••••" required />
                    </div>
                    {!isLogin && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="staff-id">Staff ID</Label>
                          <Input id="staff-id" placeholder="STAFF-XXX" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="designation">Designation</Label>
                          <Input id="designation" placeholder="Assistant Professor" required />
                        </div>
                      </>
                    )}
                    <Button type="submit" className="w-full" variant="hero">
                      {isLogin ? "Sign In" : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-4 text-center text-sm">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-brand-emerald hover:underline"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Permission Portal+?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-interactive p-6 text-center">
                <feature.icon className="h-12 w-12 text-brand-emerald mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 card-professional p-8 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">For Students</h2>
              <div className="space-y-4">
                {[
                  "Submit permission requests digitally",
                  "Track approval status in real-time",
                  "Connect with campus community",
                  "Access learning resources"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-emerald flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">For Staff</h2>
              <div className="space-y-4">
                {[
                  "Manage approvals efficiently",
                  "Priority notification system",
                  "Digital record keeping",
                  "Multi-level approval workflows"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-royal flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Permission Portal+. Built for academic excellence.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Landing;
