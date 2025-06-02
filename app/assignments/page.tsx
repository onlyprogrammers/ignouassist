import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Star, Clock, CheckCircle, FileText } from "lucide-react"
import { SlidingNavbar } from "@/components/sliding-navbar"

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      code: "BEGC-101",
      title: "An Introduction to Literature",
      program: "BA",
      semester: "1st",
      price: 0,
      type: "free",
      rating: 4.8,
      downloads: 1250,
      description: "Comprehensive assignment covering poetry, prose, and drama analysis",
    },
    {
      id: 2,
      code: "BCS-011",
      title: "Computer Basics and PC Software",
      program: "BCA",
      semester: "1st",
      price: 199,
      type: "premium",
      rating: 4.9,
      downloads: 890,
      description: "Complete assignment with practical examples and screenshots",
    },
    {
      id: 3,
      code: "BCOS-183",
      title: "Computer Application in Business",
      program: "B.Com",
      semester: "1st",
      price: 0,
      type: "free",
      rating: 4.7,
      downloads: 2100,
      description: "Business applications of computers with case studies",
    },
    {
      id: 4,
      code: "MCS-011",
      title: "Problem Solving and Programming",
      program: "MCA",
      semester: "1st",
      price: 299,
      type: "premium",
      rating: 4.9,
      downloads: 567,
      description: "Programming concepts with C language examples and solutions",
    },
    {
      id: 5,
      code: "BPSC-101",
      title: "Introduction to Political Theory",
      program: "BA",
      semester: "1st",
      price: 149,
      type: "premium",
      rating: 4.6,
      downloads: 743,
      description: "Political theory concepts with contemporary examples",
    },
    {
      id: 6,
      code: "BEVAE-181",
      title: "Environmental Studies",
      program: "All Programs",
      semester: "Any",
      price: 0,
      type: "free",
      rating: 4.5,
      downloads: 3200,
      description: "Environmental awareness and conservation strategies",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <SlidingNavbar />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IGNOU Assignments</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get high-quality, well-researched assignments for all IGNOU courses. Both free and premium options available
            with expert guidance and proper formatting.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <Input placeholder="Search by course code or title..." className="w-full" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="ba">Bachelor of Arts (BA)</SelectItem>
                <SelectItem value="bca">Bachelor of Computer Applications (BCA)</SelectItem>
                <SelectItem value="bcom">Bachelor of Commerce (B.Com)</SelectItem>
                <SelectItem value="mca">Master of Computer Applications (MCA)</SelectItem>
                <SelectItem value="mba">Master of Business Administration (MBA)</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-8">
            <Button variant="default">All Assignments</Button>
            <Button variant="outline">Free Assignments</Button>
            <Button variant="outline">Premium Assignments</Button>
            <Button variant="outline">Most Popular</Button>
          </div>
        </div>
      </section>

      {/* Assignments Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={assignment.type === "free" ? "secondary" : "default"}>
                      {assignment.type === "free" ? "FREE" : "PREMIUM"}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{assignment.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{assignment.code}</CardTitle>
                  <CardDescription className="font-medium text-gray-900">{assignment.title}</CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{assignment.program}</span>
                    <span>•</span>
                    <span>{assignment.semester} Semester</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{assignment.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{assignment.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>24h delivery</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {assignment.price === 0 ? (
                        <span className="text-lg font-bold text-green-600">FREE</span>
                      ) : (
                        <span className="text-lg font-bold text-blue-600">₹{assignment.price}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {assignment.type === "free" ? (
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Free
                      </Button>
                    ) : (
                      <>
                        <Button className="w-full">Purchase Assignment</Button>
                        <Button variant="outline" className="w-full" size="sm">
                          View Sample
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Assignments?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Quality Assured</CardTitle>
                <CardDescription>
                  All assignments are prepared by subject experts and thoroughly reviewed for quality
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Proper Formatting</CardTitle>
                <CardDescription>
                  Assignments follow IGNOU guidelines with proper formatting, references, and structure
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Quick Delivery</CardTitle>
                <CardDescription>
                  Get your assignments within 24 hours of purchase with instant download for free content
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>High Success Rate</CardTitle>
                <CardDescription>
                  95% of students using our assignments score above 80% marks in their evaluations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Need Custom Assignment Help?</h3>
          <p className="text-xl mb-8 opacity-90">
            Can't find your course assignment? We can create custom assignments for any IGNOU course
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Request Custom Assignment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
